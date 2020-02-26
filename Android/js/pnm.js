
var map = null;
    var markerArray = [];
    function submit(){

    var val = $("#id_one").val();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://34.69.165.234:80", true);
    var data = new FormData();
    data.append("type", val);
    if(val != "cancer")
      {console.log("Here");
    data.append("img", $("#file_").prop('files')[0]);}
    xhr.onreadystatechange = function(){

      var obj = JSON.parse(this.responseText)[0];
      if(!obj["empty"])
      {
        
        $("#status").html("<b>"+obj["bac"]+"</b>")
        $("#status1").html("<b>"+obj["normal"]+"</b>")
        $("#status2").html("<b>"+obj["viral"]+"</b>")

        document.getElementById("demo").innerHTML = "Analysis Report";
        clear();
        $("#result").html("<b>"+obj["pred_val"]+"</b>")

      }
    };
    xhr.send(data);
  }
  