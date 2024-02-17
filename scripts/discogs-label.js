function createLink(titleEl) {
  const titleName = titleEl.textContent.trim();

  if (!titleName.includes('versions')) {
    const linkEl = document.createElement('a');
    const imgEl = document.createElement('img');

    linkEl.href = `https://rutracker.org/forum/tracker.php?nm=${titleName}`;
    linkEl.target = '_blank';
    linkEl.style.marginLeft = '1rem';

    imgEl.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAAAICAEAAAAAAABkjYoVEgEGDAf//v8FBQH9/P8AAAD/+/8ZFwmQlMKIi3yOkZGurLfev8OAfYQDCgW6s7P7/Ojp/v77//////39//94c1QAAAAAAAD////////////TfoZax2yUtKmrqIne2snmwtiZt5VciIaosaSlipGCpX2ur7ian9z/+v++rKSdvpcOCwCunaGjss1CaWZycE4nOjdsaUTY6tOhm2XZ1+orGy50eHT//f7J2dt5qadhc3LMzNFOSSoIJSE+V1hHQhrw///v7e/q2vDd0+P+7P/j8/N9dlfg39NDREP/9/+Wn54RDRG+4+G/v795dnJ+fXZNSi0cDR4QKuDpGStPwDYFH+IRLOAPK+kCA+PrGizwDyH0BxoAE+QSLeIBFd0ADN0AAt38FivqDB46vRvyARTsABG2AQykrPoCGukLJt8ABs6M7V1PyTRBuyc+uiLZAAzrAAV8iv9yg/9GX/82WPwxQfoIJe0QPesACOopO+S5vt5+iNmSlNjY1dcABcvGxsn/rruCg7tpcbqio67RoaywsZ79hZSd05F5hJCA5mxsjGdsqmG4VmD/Ljr5JjpTxjn+HTLyHTBIvy62Gys7nSnpEyfMFSY2tCE/wCAutxg0whArqBAipQblAAZ/pP+Tov+Snf9RfP9gc/8mPv8QLP3D5fRkdPPP0PFjj/CMme8OIexWUemRsuiiweSHkuRfceQMINYWLdRyftIACtLJzNAABdADFMTM4cPG1MN6d7+8tLrNsbqYqrpMU7resrnLyraGjLXtubPO87IUHLIqO7CTma8AAK+wza6nta7/nqv5mabpkJ3LfJyXspnF95Wd3JOp+JKPjo+RlIzjeYi6nITNYYOmc3mj/3jIanW6/3SF83Fi0nD/Z27/gm1uyGeX9FyieVpnvFn3S1Nk01BWgU/sJ0xUkEh15UfSQUXQMECxMT5W0DpRTTJf2i3hCCuWRCdGzib/GBzjABGWJRD/AA3PAAOoAwIjsgASlgCZBQDGAADpkVMCAAAAV3RSTlMACgQ2uol/e2xqTj4W+/bl4N/ampSJfWJJODcvKiEdCP7+/fz5+Pj49/T08Ozr6+fm5eTg4NfQzMzBwby4t7Szsq6uraempKObkpKOgoBcXFhSTks+KyiB+q3iAAACL0lEQVR4AWNABXL+jAx4AWeTPX4FXjPOsTDhU2Cb/bMVnwp5w+yETIgKWU4bX0yVkrd/TUvPPG8X6Cao8O6wKaaDxScuiotIT7gxcXbJooe9XJhWiL1PiIiImJWVFR+fdsAJ0wJXzey0CCCIi4sr7VZnRshwi4QxyIoJ3p1dEh8BAemT9gsjaZU4o2WpOqOkND4+IS0OrCDzgrEMsu/0Fz7mu/UqK3Py298JU0EGTG5hQ7HdY+b8OYpKFz8/X3X9x/+0aRERWd3ODCFIjvCbkFGYMefBpWPtlZue/vs+dVbpJBWjeiRXyKktmBJZOHfe1X3NKxef/ZL97VHnlgqUcHCYWRgZGZlR0LYjKrZy483OtTWpZSY8yNE8IQOooLigLT8mOmX9sprUqNycj9JICtxfzwUqKCo4mh8THp2XHJUUVdVhgKTA8+WCKSAT3pxqjgkPD48Oj04p50PyBHv/wg8gA+bf4wWaAAa56xyR4rD/79ei6dPnfbrcuDUKIp9XXe+C0N/07H5f34viJ3s3pEYlhUNAckULK0xBkLWQED+/xp7tsbExSdFQBdGpy48ghTYjD1Ow7qG6quSURLgZseVdHKjJQeR4z8GG1duigH6ISklMTKxdiq7C/M8dPW+B3dXRyXVLNjc08upos6GmSu6eK1YMoidz82pzLKSkQnkYMVI1ewcrA3f7rtgyZWYc+SIAmIwETq/YyYovc4meyDHDm4Ml1lzjwp+BfVA8BwCESNe4x56sjAAAAABJRU5ErkJggg==';
    imgEl.width = 18;

    linkEl.appendChild(imgEl);
    titleEl.appendChild(linkEl);
  }
}

setTimeout(function () {
  const titleElArr = document.querySelectorAll('td.title_oY1q1 > span');

  if (titleElArr.length > 0) {
    titleElArr.forEach((titleEl) => {
      createLink(titleEl);
    });
  } else {
    alert('Перезагрузите страницу, ф5');
  }
}, 3000);
