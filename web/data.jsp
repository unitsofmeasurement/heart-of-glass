<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="java.io.IOException"%>
<%@page import="org.things.Things"%>
<%@page import="org.things.device.SerialDevice"%>
<%@page import="org.things.Device"%>
<%!    private static Device device;
    private static int inited = 0;
    private static String port = "/dev/ttyUSB0";
    private static final List<Integer> stack = new ArrayList<Integer>();

    public static void put(int e) {
        if (stack.size() > 30) {
            stack.remove(0);
        }
        stack.add(e);
    }  

    public static void init(String port) throws Exception {
//		device = new SerialDevice(port, 9600);
//		device.open();
        System.setProperty("gnu.io.rxtx.SerialPorts", port);
        System.out.println("starting");
        Things.delay(1500);

        new Thread() {
            public void run() {

                while (1 == 1) {
                    try {
                        int result = read();
                        //     fc = read(); 

                        put(result);
                   //     System.out.println("inserting");
                        Thread.sleep(1000);
                    } catch (Exception e) {
                    }

                }

            }
        }.start();
    }
    public static int last = 0;

    public static int read() throws IOException, Exception {
        if (device == null) {
            if (last == 0) {
                last = (int) (Math.random() * 40 + 60);
              }
            if(last>300)last=0;
            return last += (int) (Math.random() * 10 - 5);
        }
        //Device device = new SerialDevice(port, 9600);
        //device.open();
        //Things.delay(1500);
        device.send("G1\r");
        Things.delay(100);

        String s = device.receive();
        String batimento = null;

        if (s != null) {
            return Integer.valueOf(s.split(" ")[2]);
            //	fc = new FrequenciaCardiaca();
        } else {
            throw new Exception("O sensor retornou nulo.");
        }
        //device.close();

    }

    public static void close() throws Exception {
        device.close();
    }


%>
<%
    if (inited == 0) {
        init(port);
        inited = 1;
    }



%>
[
<%
    for (int i = 0; i < stack.size(); i++) {
%><%=stack.get(i)%><%
    if (i < stack.size() - 1) {%>,<%}
    }

%>
]