(function($p)
{
    $p.init = function() {
        $(document).on('change', '[type="file"]', function(event){

        });

        $('#form').on('submit', function(event) {
            // @todo write logic to check if all files matches criteria
        });
    };

    $p.calculateFileSize = function() {
        // @todo write logic to calculate sizes from all inputs of type file
    };

})(form = {});