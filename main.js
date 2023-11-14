document.addEventListener("DOMContentLoaded", function(event) {

          toggleSidebar();
          toggleCardsOnClick();
          toggleEmployeeCardOnClick();

            
        })

    
  
   




const items = document.querySelectorAll('.nav_list div  a');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(item => {
      item.classList.remove('active');
    });

    // toggle the 'active' class to the clicked item
    item.classList.toggle('active');
  });
});


const activeStateItems = (items)=>{
    items.forEach((item)=>{
        console.log(item);

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

const toggleSidebar = ()=>{
  const sidebar = document.querySelector('.sidebar')
  if(sidebar){
    sidebar.classList.toggle('toggleSidebar')
  }
}



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
