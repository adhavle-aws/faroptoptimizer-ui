export default class DataProvider {
    getData(name, callback) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          callback(JSON.parse(this.responseText));
        }
      };
      xhttp.open('GET', `polaris.a2z.com/examples/resources/distributions.json`, true);
      xhttp.send();
    }
  }