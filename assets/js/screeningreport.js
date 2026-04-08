

function generatePdf()
{

const doc = new window.jspdf.jsPDF(); // Use the window namespace
    doc.autoTable({ body: [['Hello', 'World']] });
    doc.save('test.pdf');


}


async function generatePdf2()
{

    const doc = new jspdf.jsPDF('p','pt','a4');



    const margin = 40;

    let currentY = 40;



  //  await doc.html(document.getElementById('report_heading'),{
  //    x:margin,
  //    y:20,
  //    window:520,
  //    windowWidth:800

  //  });
doc.autoTable({ 
  html: '#report_company_info',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'left',
   textColor:[50,50,50],
   fontSize:14,
   fontStyle:'bold',

   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});
currentY = doc.lastAutoTable.finalY + 40;

  doc.autoTable({ 
  html: '#report_heading',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});

currentY = doc.lastAutoTable.finalY + 20;


// AutoTable will automatically detect the colspan="2" and colspan="3"
 doc.autoTable({ 
  html: '#screening-report-table',
  startY:currentY,
  theme: 'grid',
  headStyles: { halign: 'center' },
   styles:{
   fillColor:[255,255,255],
   textColor:[0,0,0]
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fillColor:[244,219,24],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:200},
    2:{cellWidth:'auto',halign:'center',valign:'center'},

    3:{cellWidth:'auto',halign:'center',valign:'center'},
    4:{cellWidth:'auto',halign:'center',valign:'center'},
    5:{cellWidth:'auto',halign:'center',valign:'center'},
    6:{cellWidth:'auto',halign:'center',valign:'center'},
    7:{cellWidth:'auto',halign:'center',valign:'center'},

  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});



currentY = doc.lastAutoTable.finalY + 20;

// if(currentY + 250 > 700)
// {
//    doc.addPage();
//    currentY = 40;

// }

// await doc.html(document.getElementById('report_result_heading'),{
//      x:margin,
//      y:currentY,
//      window:520,
//      windowWidth:800

//    });

// currentY = currentY + document.getElementById('report_result_heading').offsetHeight * 1 + 40;

currentY = doc.lastAutoTable.finalY +80;

 doc.autoTable({ 
  html: '#report_result_heading',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fontSize:14,
   fontStyle:'bold',

   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});

currentY = doc.lastAutoTable.finalY + 20;

 doc.autoTable({ 
  html: '#report_score_breakdown_heading',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fontSize:14,
   fontStyle:'bold',

   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});

currentY = doc.lastAutoTable.finalY + 20;

 doc.autoTable({ 
  html: '#screening-score-table',
  startY:currentY,
  theme: 'grid',
  styles:{
   fillColor:[244,219,24],
   textColor:[50,50,50]
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fillColor:[69,224,25] 
  },

  columnStyles:{
    0:{cellWidth:'auto'
      
  },
    1:{cellWidth:'auto',halign: 'center' },
   

  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 
  }
});



currentY = doc.lastAutoTable.finalY + 80;

 doc.autoTable({ 
  html: '#report_norms_heading',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fontSize:14,
   fontStyle:'bold',

   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});









currentY = doc.lastAutoTable.finalY +20;


 doc.autoTable({ 
  html: '#screening-verdict-table',
  startY:currentY,
  theme: 'grid',
  styles:{
   fillColor:[244,219,24],
   textColor:[50,50,50],
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fillColor:[69,224,25] 
  },

  columnStyles:{
    0:{cellWidth:'auto',halign: 'center' },
    1:{cellWidth:'auto',halign: 'center' },
   

  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 
  }
});


currentY = doc.lastAutoTable.finalY + 80;

 doc.autoTable({ 
  html: '#report_disability_heading',
  startY:currentY,
  theme: 'plain',
   styles:{
   fillColor:[255,255,255],
   lineColor:[255,255,255],

   lineWidth:0
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fontSize:14,
   fontStyle:'bold',

   fillColor:[255,255,255],
  },

  columnStyles:{
    0:{cellWidth:'auto'},
    1:{cellWidth:'auto'},


  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 

    
  }
});



currentY = doc.lastAutoTable.finalY +20;


 doc.autoTable({ 
  html: '#screening-disabilty-table',
  startY:currentY,
  theme: 'grid',
  headStyles: { halign: 'center' },
   styles:{
   fillColor:[244,219,24],
   textColor:[50,50,50]
  },

  headStyles: { 
    halign: 'center',
   textColor:[50,50,50],
   fillColor:[69,224,25] 
  },

  columnStyles:{
    0:{cellWidth:'auto',halign: 'center' },
    1:{cellWidth:'auto',halign: 'center' },
   

  },
  // This ensures the content inside the colspan remains centered if specified
  didParseCell: function (data) {
    // if (data.cell.raw.getAttribute('colspan')) {
    //     data.cell.styles.halign = 'center';
    // }
  },
  didDrawPage:function(data)
  {
     currentY = data.cursor.y; 
  }
});

doc.save('autism_screening_report.pdf');


}


(function()
{


     document.addEventListener('DOMContentLoaded', function(){

        screening_report_download


        const screendownloadbtn = document.querySelector('#screening_report_download')


                   screendownloadbtn.addEventListener('click', function( event ){
                                  generatePdf2();


                   });








})

})();


