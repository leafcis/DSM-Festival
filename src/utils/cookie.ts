export const setCookie = (name : string, token : string) : void => {
    document.cookie = `${name}=${token};`
}

export const getCookie = (name : string) : string | null => {
    var nameEQ = name + '=';
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

export const removeCookie = (name: string) : void => {
    let date = new Date();
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }