import store from '../Store/store';
import { updateData } from '../Actions/actionCreator';


const getData = (api, token) => () => {
  // removes http(s)://
  if (api.includes('http')) api = api.substring(api.indexOf('//') + 2);

  fetch('/server/getInfo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api, token }),
  })
    .then((res) => res.json())
    .then((data) => { store.dispatch(updateData(data, api, token)); })
    .catch((err) => { console.log('Error: wrong api or token:', err); });
};

export default {
  getData,
};
