let executing = false;
let form = document.getElementById("form");
form.onsubmit = () => {
    if (!executing) {
        executing = true;
        update_form(form, website_api + "/auth/register", "/feed/");
        executing = false;
    }
    return false;
};
