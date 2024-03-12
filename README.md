<h1>Generate a PDF in Mirth Connect</h1>
<h2>Objective</h2>
<p>How to generate PDF files in Mirth Connect. To demonstrate this PDF file generation, we will use a real world example. The real world example entails sending a message to "Mirth Connect Server" using "Mirth Connect Client API". In our case, the message is in the form of a JSON file. However, the message can be in any form that "Mirth Connect" supports. Once "Mirth Connect Server" receives the message, the message will be transferred over to a PDF file.</p>
<h2>Technologies</h2>
<ul>
  <li>Mirth Connect</li>
  <li>Mirth Connect Administrator Launcher</li>
  <li>Mirth Connect Server</li>
  <li>Mirth Connect Client API</li>
  <li>OpenPDF</li>
  <li>Javascript</li>  
</ul>
<h2>Downloads</h2>
<ul>
  <li><a href="https://www.nextgen.com/solutions/interoperability/mirth-integration-engine/mirth-connect-downloads" target="_blank">Mirth Connect 4.5.0</a> Note: Under Mirth Connect 4.5.0, download the software that is compatible with your operating system.
 </li>
  <li><a href="https://search.maven.org/search?q=g:com.github.librepdf" target="_blank">OpenPDF Jar File</a> Note: locate openpdf in the Artifact id column in table. Next, click the download button. Finally, select the <b>"Jar"</b> file.</li>
</ul>
<h2>Instructions</h2>
<ol>
  <li>Download or clone this repository because we will need to access files later on.</li>
  <li>Download <a href="https://www.nextgen.com/solutions/interoperability/mirth-integration-engine/mirth-connect-downloads" target="_blank">Mirth Connect 4.5.0</a>.</li>
  <li>Follow instructions on how to install Mirth Connect 4.5.0 <a href="https://docs.nextgen.com/bundle/Mirth_User_Guide_4_5/page/connect/connect/topics/t_Download_and_Installation_connect_ug.html" target="_blank">instructions</a></li>
  <li>Once Mirth Connect is installed, start "Mirth Connect Server".</li>
  <li>Next, open and login into "Mirth Connect Administrator Launcher".</li>
  <li>On the left you will see a drop down menu that is called, "Mirth Connect". Click on "Channels".</li>
  <li>Now, on the left, you will see a drop down menu that is called, "Channel Tasks". Click on "Import Channel". Locate the file, "JSON to File_Channel.xml", in the repository that was downloaded or cloned. The path to the file is: "...\Mirth\Export Files\Channels". Click the "open" button.</li>
  <li>After you successfully imported the Channel, locate the "custom-lib" folder where you installed "Mirth Connect". It might be located at the path of "C:\Program Files\Mirth Connect\custom-lib". Copy and past the "openpdf-2.0.1.jar" file in the "custom-lib" folder. The "openpdf-2.0.1.jar" file is located in the repository: "...\Mirth-Connect-PDF-Generator\Scripts\OpenPDF\openpdf-2.0.1.jar".</li>
  <li>Next, go to "Mirth Connect Administrator Launcher". To the left you will see a dropdown menu that is called, "Mirth Connect". Under that menu, click on "Channels". Right click on the channel called, "JSON to file" then select "Edit Channel". Select the "Destinations" tab. In the Javascript below, change the "fileOutputPath" variable to a path that is in your file system.</li>
  <li>Open up your browser and then enter the following url into the address bar: "https://192.168.56.1:8443/api/". That URL I provided maybe incorrect. To find the correct URL, open "Mirth Connect Server", here you can find the URL that "Mirth Connect Server" generated for you. Replace the IP address and port number as needed. Ex.) "https://xxx.xxx.xx.x:xxxx/api/"</li>
  <li>That URL will bring you to the "Mirth Connect Client API". Before continuing, make sure to login with your Administrator credentials.</li>
  <li>Now select messages then select "Post /channels/{channelId}/messages".</li>
  <li>Click the "Try it out" button located to the right.</li>
  <li>In the fields below, enter in the following values: 
    <ul>
      <li>channelId(string): 32c17800-9f55-4e82-8278-0a348c0e122d</li>
      <li>destinationMetaDataId(integer): 1</li>
      <li>Request body(string): {"HL7Message":{"MSH":{"MSH.1":"|","MSH.2":"^~\\&","MSH.3":{"MSH.3.1":"Ntierprise"},"MSH.4":{"MSH.4.1":"Ntierprise Clinic"},"MSH.5":{"MSH.5.1":"Healthmatics EHR"},"MSH.6":{"MSH.6.1":"Healthmatics Clinic"},"MSH.7":{"MSH.7.1":20190423113910},"MSH.8":null,"MSH.9":{"MSH.9.1":"ADT","MSH.9.2":"A08"},"MSH.10":{"MSH.10.1":"8899-39"},"MSH.11":{"MSH.11.1":"P"},"MSH.12":{"MSH.12.1":2.3},"MSH.13":null,"MSH.14":null,"MSH.15":{"MSH.15.1":"NE"},"MSH.16":{"MSH.16.1":"NE"}},"EVN":{"EVN.1":{"EVN.1.1":"A08"},"EVN.2":{"EVN.2.1":20190423113910},"EVN.3":null,"EVN.4":{"EVN.4.1":"01"}},"PID":{"PID.1":{"PID.1.1":1},"PID.2":null,"PID.3":{"PID.3.1":151},"PID.4":null,"PID.5":{"PID.5.1":"Bond","PID.5.2":"Tiny"},"PID.6":null,"PID.7":{"PID.7.1":19990723},"PID.8":{"PID.8.1":"M"},"PID.9":null,"PID.10":null,"PID.11":{"PID.11.1":"8388 Secret Agent Way","PID.11.2":null,"PID.11.3":"Raleigh","PID.11.4":"NC","PID.11.5":27677},"PID.12":null,"PID.13":null,"PID.14":null,"PID.15":null,"PID.16":null,"PID.17":null,"PID.18":{"PID.18.1":151},"PID.19":null,"PID.20":null,"PID.21":null,"PID.22":null,"PID.23":null,"PID.24":null,"PID.25":null,"PID.26":null,"PID.27":null,"PID.28":null,"PID.29":null,"PID.30":{"PID.30.1":"N"}},"NK1":{"NK1.1":{"NK1.1.1":1},"NK1.2":{"NK1.2.1":"Bond","NK1.2.2":"Lady","NK1.2.3":"T"},"NK1.3":{"NK1.3.1":"Spouse","NK1.3.2":"Spouse"},"NK1.4":{"NK1.4.1":"007 Soho Lane","NK1.4.2":null,"NK1.4.3":"Cary","NK1.4.4":"NC","NK1.4.5":27511},"NK1.5":{"NK1.5.1":"(919)007-0007","NK1.5.2":null,"NK1.5.3":"PH","NK1.5.4":null,"NK1.5.5":null,"NK1.5.6":919,"NK1.5.7":"0070007"}},"PV1":{"PV1.1":{"PV1.1.1":1},"PV1.2":{"PV1.2.1":"R"},"PV1.3":null,"PV1.4":null,"PV1.5":null,"PV1.6":null,"PV1.7":{"PV1.7.1":"Manning","PV1.7.2":"Manning","PV1.7.3":"Terry","PV1.7.4":null,"PV1.7.5":null,"PV1.7.6":null,"PV1.7.7":null,"PV1.7.8":null,"PV1.7.9":{"PV1.7.9.1":null,"PV1.7.9.2":7654321,"PV1.7.9.3":"UPIN"}},"PV1.8":null,"PV1.9":null,"PV1.10":null,"PV1.11":null,"PV1.12":null,"PV1.13":null,"PV1.14":null,"PV1.15":null,"PV1.16":{"PV1.16.1":"N"},"PV1.17":null,"PV1.18":{"PV1.18.1":"A"}},"GT1":{"GT1.1":{"GT1.1.1":1},"GT1.2":{"GT1.2.1":150},"GT1.3":{"GT1.3.1":"Bond","GT1.3.2":"James","GT1.3.3":null,"GT1.3.4":"007"},"GT1.4":null,"GT1.5":{"GT1.5.1":"007 Soho Lane","GT1.5.2":null,"GT1.5.3":"Cary","GT1.5.4":"NC","GT1.5.5":27511},"GT1.6":[{"GT1.6.1":"(919)007-0007","GT1.6.2":null,"GT1.6.3":"PH","GT1.6.4":null,"GT1.6.5":null,"GT1.6.6":919,"GT1.6.7":"0070007"},{"GT1.6.1":"(777)707-0707","GT1.6.2":null,"GT1.6.3":"CP","GT1.6.4":null,"GT1.6.5":null,"GT1.6.6":777,"GT1.6.7":7070707},{"GT1.6.1":null,"GT1.6.2":"NET","GT1.6.3":"X.400","GT1.6.4":"007@BritishSecretService.com"}],"GT1.7":{"GT1.7.1":"(919)851-6177 X007","GT1.7.2":null,"GT1.7.3":null,"GT1.7.4":null,"GT1.7.5":null,"GT1.7.6":919,"GT1.7.7":8516177,"GT1.7.8":"007"},"GT1.8":{"GT1.8.1":19770920},"GT1.9":{"GT1.9.1":"M"},"GT1.10":null,"GT1.11":null,"GT1.12":{"GT1.12.1":"007-00-0007"},"GT1.13":null,"GT1.14":null,"GT1.15":null,"GT1.16":null,"GT1.17":{"GT1.17.1":"2988 England Drive","GT1.17.2":null,"GT1.17.3":"London","GT1.17.4":"DC"},"GT1.18":null,"GT1.19":null,"GT1.20":{"GT1.20.1":"F"},"GT1.21":null,"GT1.22":null,"GT1.23":null,"GT1.24":null,"GT1.25":null,"GT1.26":null,"GT1.27":null,"GT1.28":null,"GT1.29":null,"GT1.30":{"GT1.30.1":"M"},"GT1.31":null,"GT1.32":null,"GT1.33":null,"GT1.34":null,"GT1.35":null,"GT1.36":null,"GT1.37":null,"GT1.38":null,"GT1.39":null,"GT1.40":null,"GT1.41":null,"GT1.42":null,"GT1.43":null,"GT1.44":null,"GT1.45":null,"GT1.46":null,"GT1.47":null,"GT1.48":null,"GT1.49":null,"GT1.50":null,"GT1.51":{"GT1.51.1":"British Secret Service"}}}}</li>
    </ul> 
  <li>Next, click the "Execute" button.</li>
  <li>Finally, a PDF file should have been generated in the file path that was specified above.</li>
</ol>