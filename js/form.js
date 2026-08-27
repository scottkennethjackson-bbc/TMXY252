const publishNow = document.getElementById("publish-now");
const scheduleAnnouncement = document.getElementById("schedule-announcement");

publishNow.addEventListener("change", function () {
    scheduleAnnouncement.disabled = this.checked;
});
