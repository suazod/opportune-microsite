$(document).ready(function () {
    $.getJSON("js/data.json", function (data) {
        const invoiceHeader = document.getElementById('invoiceHeader');
        console.log(data)

        invoiceHeader.innerHTML = `
        <tr>
            <th scope="row">${data.Invoices[0].HeaderID}</th>
            <td>${data.Invoices[0].Vendor}</td>
            <td>${data.Invoices[0].InvoiceNumber}</td>
            <td>$${data.Invoices[0].InvoiceAmount.toFixed(2)}</td>
            <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">View Details</label>
                </div>
            </td>
        </tr>
        <tr id="first-details"></tr>
        <tr>
            <th scope="row">${data.Invoices[1].HeaderID}</th>
            <td>${data.Invoices[1].Vendor}</td>
            <td>${data.Invoices[1].InvoiceNumber}</td>
            <td>$${data.Invoices[1].InvoiceAmount.toFixed(2)}</td>
            <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefaultTwo">
                    <label class="form-check-label" for="flexSwitchCheckDefaultTwo">View Details</label>
                </div>
            </td>
        </tr>
        <tr id="second-details"></tr>
        `;

        //set the first set of details
        document.getElementById("flexSwitchCheckDefault").addEventListener('click', function (e) {
            if (e.target.checked) {
                document.getElementById("first-details").innerHTML = `
              <td colspan="5" class="sub-table">
              <div class="inner-sub-table animate__animated animate__slideInDown animate__faster">
               <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">${data.Invoices[0].Details[0].DetailID}</th>
                        <td>${data.Invoices[0].Details[0].Quantity}</td>
                        <td>$${data.Invoices[0].Details[0].UnitPrice.toFixed(2)}</td>
                        <td>$${data.Invoices[0].Details[0].LineItemTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                        <th scope="row">${data.Invoices[0].Details[1].DetailID}</th>
                        <td>${data.Invoices[0].Details[1].Quantity}</td>
                        <td>$${data.Invoices[0].Details[1].UnitPrice.toFixed(2)}</td>
                        <td>$${data.Invoices[0].Details[1].LineItemTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                        <th scope="row">${data.Invoices[0].Details[2].DetailID}</th>
                        <td>${data.Invoices[0].Details[2].Quantity}</td>
                        <td>$${data.Invoices[0].Details[2].UnitPrice.toFixed(2)}</td>
                        <td>$${data.Invoices[0].Details[2].LineItemTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table> 
                    </div>
                    </td>
                    
            `;
            } else {
                document.getElementById("first-details").innerHTML = '';
            }
        });

        //set the second set of details
        document.getElementById("flexSwitchCheckDefaultTwo").addEventListener('click', function (e) {
            if (e.target.checked) {
                document.getElementById("second-details").innerHTML = `
              <td colspan="5" class="sub-table">
              <div class="inner-sub-table animate__animated animate__slideInDown animate__faster">
               <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">${data.Invoices[1].Details[0].DetailID}</th>
                        <td>${data.Invoices[1].Details[0].Quantity}</td>
                        <td>$${data.Invoices[1].Details[0].UnitPrice.toFixed(2)}</td>
                        <td>$${data.Invoices[1].Details[0].LineItemTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                        <th scope="row">${data.Invoices[1].Details[1].DetailID}</th>
                        <td>${data.Invoices[1].Details[1].Quantity}</td>
                        <td>$${data.Invoices[1].Details[1].UnitPrice.toFixed(2)}</td>
                        <td>$${data.Invoices[1].Details[1].LineItemTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table> 
                    </td>
                    
            `;
            } else {
                document.getElementById("second-details").innerHTML = '';
            }
        });

    });
});