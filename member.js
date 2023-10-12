function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    if (memberValue == "") {
        member.style.border = "2px solid red";
        document.getElementById("memberError").innerHTML = "Member is required";
        return false;
    } else {
        member.style.border = "2px solid green";
        document.getElementById("memberError").innerHTML = "";
        return true;
    }
}