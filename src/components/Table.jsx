import  { useState } from "react";

const dummyData = [
  {
    id: 1,
    name: "James Brown",
    email: "james.brown@example.com",
    phone: "09012345678",
    status: "Unpaid",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "09087654321",
    status: "Paid",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "09011223344",
    status: "unpaid",
  },
  {
    id: 4,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "09022334455",
    status: "Paid",
  },
  {
    id: 5,
    name: "Tom Hanks",
    email: "tom.hanks@example.com",
    phone: "09033445566",
    status: "Paid",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "09044556677",
    status: "unpaid",
  },
  {
    id: 7,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "09055667788",
    status: "Unpaid",
  },
  {
    id: 8,
    name: "Sarah Connor",
    email: "sarah.connor@example.com",
    phone: "09066778899",
    status: "Paid",
  },
  // Add more dummy data as needed
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items per page
  const [timeFrame, setTimeFrame] = useState("Weekly"); // Default to "Weekly"

  // Filter data based on the search term
  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the current items for the page
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table_container">
      <div className="table_container_filter">
        <p>People you have invited</p>

        <div className="flex-row gap-5">
          <div className="table_container_border">
            &#128269;
            <input
              type="text"
              placeholder="Search.."
              className="table_input_search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="table_container_border">
            <select
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="table_input_dropdown"
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table_wrapper">
        <div className="table_header">
          <div className="table_header_item">Name</div>
          <div className="table_header_item">Contact Info</div>
          <div className="table_header_item">Status</div>
        </div>

        <div className="table_body">
          {currentItems.map((item) => (
            <div className="table_row" key={item.id}>
              <div className="table_cell flex-row">
                <img
                  className="table_row_img"
                  src={`https://gravatar.com/avatar/${item.id}?s=400&d=robohash&r=x`}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
              <div className="table_cell">
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
              <div className="table_cell">
                <div className="table_row_action">
                  &#9679;
                  <p>{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="table_pagination">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex-row table_pagination_number">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`table_border ${
                currentPage === index + 1 ? "table_border_active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
        <div className="table_row_action">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="table_input_dropdown"
          >
            <option value={2}>2 per page</option>
            <option value={3}>3 per page</option>
            <option value={5}>5 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
