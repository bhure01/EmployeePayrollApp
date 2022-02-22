window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});
const createInnerHtml = () => {
  const inner = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>
      <img
        class="profile"
        alt=""
        src="../assets/profile-images/Ellipse -2.png"
      />
    </td>
    <td>Narayan Mahadevan</td>
    <td>Male</td>
    <td>
      <div class="dept-label">HR</div>
      <div class="dept-label">Finance</div>
    </td>
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
      <img
        name="l"
        onclick="remove(this)"
        alt="delete"
        src="../assets/icons/delete-black-18dp.svg"
      />
      <img
        name="1"
        alt="edit"
        onclick="update(this)"
        src="../assets/icons/create-black-18dp.svg"
      />
    </td>
  </tr>`;
  document.getElementById("display").innerHTML = inner;
};