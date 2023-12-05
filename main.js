document.addEventListener("DOMContentLoaded", function(event) {

          activeStateItems()
          toggleSidebar();
          toggleCardsOnClick();
          toggleEmployeeCardOnClick();
          toggleDropdown();
          closeDropdown();

            
        })

    
  
const activeStateItems = ()=>{
  const sidebarItems = document.querySelectorAll('.sidebar .sidebar-items a li')
  console.log(sidebarItems)
  sidebarItems.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
      item.classList.add('onHover')
    })
    item.addEventListener('mouseleave',()=>{
      item.classList.remove('onHover')
    })
    item.addEventListener('click', () => {
          sidebarItems.forEach(item => {
            item.classList.remove('active');
      });
      item.classList.add('active')
  })
})

}
  
const toggleCardsOnClick = ()=>{
    let cardsContainer = document.querySelector('.cards')
    console.log("hello carsd continaer");
    cardsContainer.classList.toggle('ToggleCardsOnClick');
}

const toggleEmployeeCardOnClick = ()=>{
    let employeeContainer = document.querySelector('.bottom-container')
    employeeContainer.classList.toggle('toggleEmployeeCard');
}

let logoAdded=false;

const toggleSidebar = ()=>{
  const sidebar = document.querySelector('.sidebar')
  const toggleBtn = document.querySelector('.menu-icon')
  const inputElems = document.querySelector('.input-group')
  const closeIcon = document.querySelector('.close-icon')
  if(screen.width<=650){
    closeIcon.style.display='block';
  }else{
    closeIcon.style.display='none';
  }

  toggleBtn.addEventListener('click',()=>{
  sidebar.classList.toggle('toggleSidebar')
  inputElems.classList.toggle('input-group-toggle')
 

})
  toggleSidebarWithCloseBtn(sidebar)
}



const toggleSidebarWithCloseBtn = (sidebar)=>{
    const closeIcon = document.querySelector('.close-icon')
    closeIcon.addEventListener('click', ()=>{
        sidebar.classList.toggle('toggleSidebar')
    })

}



const toggleDropdown = ()=>{
  const profile  = document.querySelector('.profile')  
  const dropdown  = document.querySelector('.dropdown')  
  profile.addEventListener('click', (event)=>{
    event.stopPropagation();
    dropdown.classList.toggle('showDropdown');
  })

}
const dropdown  = document.querySelector('.dropdown')  
document.addEventListener("click", function () {
if(dropdown.classList.contains('showDropdown')) {
  dropdown.classList.remove('showDropdown')
}
});

// apex chart
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  title: {
    text: 'Sales Report',
    align: 'left',
    margin: 10,
    offsetX: 10,
    offsetY: 5,
    floating: false,
    style: {
      fontSize:  '20px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
}
  };

  var chart = new ApexCharts(document.querySelector("#salesChart"), options);
  chart.render();
