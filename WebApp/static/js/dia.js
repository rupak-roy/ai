
var map = null;
    var markerArray = [];
    function submit(){

    var val = $("#id_one").val();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://35.223.9.111:80", true);
    var data = new FormData();
    data.append("type", val);
    if(val != "cancer")
      {console.log("Here");
    data.append("img", $("#file_").prop('files')[0]);}
    xhr.onreadystatechange = function(){

      var obj = JSON.parse(this.responseText)[0];
      if(!obj["empty"])
      {
        $("prediction-id").html(obj["mild"]);
        $("prediction-id").html(obj["mod"]);
        $("prediction-id").html(obj["norm"]);
        $("prediction-id").html(obj["severe"]);
        if(parseInt(obj["pred_val"]) != 0){
          plotMap(obj["places"]);
          addPlaces(obj["places"]);
        }
        $("#status").html("<b>"+obj["mild"]+"</b>")
        $("#status1").html("<b>"+obj["mod"]+"</b>")
        $("#status2").html("<b>"+obj["norm"]+"</b>")
        $("#status3").html("<b>"+obj["severe"]+"</b>")
        document.getElementById("demo").innerHTML = "Analysis Report";
        clear();
        $("#result").html("<b>"+obj["pred_val"]+"</b>")

      }
    };
    xhr.send(data);
  }
 
 