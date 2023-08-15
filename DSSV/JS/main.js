// Danh sách rỗng
var dssv = []



var jsonData = localStorage.getItem("DSSV")

if (jsonData!=null) {
    var list = JSON.parse(jsonData) //Chuyển JSON về array thêm vào dssv
    dssv = list.map(function(item){
        return new SinhVien(item.ma,item.ten,item.mail,item.matKhau,item.ngaySinh,item.khoaHoc,item.toan*1,item.ly*1,item.hoa*1)
    })
    renderDssv(dssv)
}

// Thêm sinh viên 
function addSV () {
    // Lấy thông tin từ form
    var sv = getDataForm()
    // Thêm thông tin vào danh sách
    dssv.push(sv)

    // Chuyển dữ liệu vào localStorage
    // Chuyển dssv thành JSON
    var jsonData = JSON.stringify(dssv)
    // lưu JSON vào localStorage
    localStorage.setItem("DSSV",jsonData)

    // Show thông tin
    renderDssv(dssv)
}


// Xóa sinh viên
function xoaSv (id) {
    var index = timViTri(id,dssv);
    // Loại khỏi dssv
    dssv.splice(index,1);

    // Update lại localStorage khi xóa
    var jsonData = JSON.stringify(dssv)
    localStorage.setItem("DSSV",jsonData)

    renderDssv(dssv)
}

// Sửa thông tin
function suaSv (id) {
    var index = timViTri(id,dssv);
    // Đưa thông tin về form
    var sv = dssv[index]
    showDataForm(sv)
    // Khóa ipunt id
    document.getElementById('txtMaSV').disabled = true
    document.getElementById('add-sv').disabled = true
    document.getElementById('reset-sv').disabled = true
}

// Update thông tin đã sưa
function updateSV() {
    // Lấy thông tin từ form
    var sv = getDataForm()
    // Thế sv đã sửa vào sv có id cũ
    var index = timViTri(sv.ma,dssv)
    dssv[index] = sv

    document.getElementById('txtMaSV').disabled = false
    document.getElementById('add-sv').disabled = false
    document.getElementById('reset-sv').disabled = false
    renderDssv(dssv)
}

// Reset input
function resetInput() {
    location.reload()
}

// Tìm sinh viên
var searchList = [];
function searchSV() {
    var searchData = document.getElementById("txtSearch").value;
    for (var i = 0; i < dssv.length; i++) {
        if (dssv[i].ten.trim()==searchData) {
            searchList.push(dssv[i])
        } 
    }
    renderDssv(searchList)
}