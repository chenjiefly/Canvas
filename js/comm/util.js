define('util', [], function() {
    return {
        resetCanvas: function ($canvas) {
            $canvas.attr('width' , $canvas.width())
                   .attr('height', $canvas.height());
        }
    };

});
