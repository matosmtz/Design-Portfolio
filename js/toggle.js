    $(document).ready(function() {
      $("#toggle-ade").click(function() {
        $("#ade").addClass("selected");
        $("#toggle-ade").addClass("selected");
        $("#traditional-sample").removeClass("selected");
        $("#toggle-traditional").removeClass("selected");
      });
      $("#toggle-traditional").click(function() {
        $("#ade").removeClass("selected");
        $("#toggle-ade").removeClass("selected");
        $("#traditional-sample").addClass("selected");
        $("#toggle-traditional").addClass("selected");
      });
    });