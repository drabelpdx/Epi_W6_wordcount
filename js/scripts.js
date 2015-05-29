var wordCount = function(sentence) {
  var arr = sentence.split(" ");
    var words = [], counts = [], prev;
      arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
        words.push(arr[i]);
        counts.push(1);
      } else {
        counts[counts.length-1]++;
      }
        prev = arr[i];
    }
      var empty = [];

      for (var i = 0; i < words.length; i ++) {
         empty.push(counts[i] + " : " + words[i] + "<br />");
         empty.sort().reverse();
      }
         empty.toString();
      return empty;
};

  $(document).ready(function() {
    $("form#wordcount").submit(function(event) {
      var sentence = $("input#words").val();
      var result = wordCount(sentence);
      console.log(sentence)
      console.log(result)
      $(".words").html(result);

      $("#result").show();

      event.preventDefault();
    });
  });
