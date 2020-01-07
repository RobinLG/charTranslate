function myTranslate() {
      var s=$('#myChar').val();
    //   s = s.replace(/\b([\!]|[\@]|[\#]|[\$]|[\%]|[\^]|[\&]|[\*]|[\(]|[\)])\b/g, function($0, $1) {
    //   alert("sssssss")
    //     return {
    //         "!": "1"
    //         , "@": "2"
    //         , "#": "3"
    //         , "$": "4"
    //         , "%": "5"
    //         , "^": "6"
    //         , "&": "7"
    //         , "*": "8"
    //         , "(": "9"
    //         , ")": "0"
    //     }[$1];
    // });
    // alert(s);
      var t = s.replace(/\!/g, "1").replace(/\@/g, "2").replace(/\#/g, "3")
      .replace(/\$/g, "4").replace(/\%/g, "5").replace(/\^/g, "6")
      .replace(/\&/g, "7").replace(/\*/g, "8").replace(/\(/g, "9")
      .replace(/\)/g, "0");
      document.getElementById("myNumber").value=t;
}
