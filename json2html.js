// json2html.js
export default function json2html(data) {
    // Define the table structure with data-user attribute
    let html = `<table data-user="rakeshkonne76@gmail.com">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>`;
  
    // Loop through the data array and create table rows
    data.forEach(item => {
      html += `<tr>
                 <td>${item.Name}</td>
                 <td>${item.Age}</td>
                 <td>${item.Gender || ''}</td> <!-- Gender can be empty if not available -->
               </tr>`;
    });
  
    // Close table tags
    html += `</tbody></table>`;
  
    // Return the constructed HTML string
    return html;
  }
  