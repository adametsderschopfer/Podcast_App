const select = document.getElementById('selectOldOrNew')

select.addEventListener('change', function() {
    var index = select.selectedIndex;
    if(index === 1) {
        $('#list').css( 'flex-direction','column')
    }else if( index === 0){
        $('#list').css( 'flex-direction','column-reverse')
    }
  })
