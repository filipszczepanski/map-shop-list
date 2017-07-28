const googleAnaliticsMiddleware = store => next => action => {
  let result = next(action);

  const state = store.getState();

  if (state.shopListData.data.length) {
    const { siec, adres } = state.shopListData.data[state.shopList.choosed];
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'App',
      eventAction: 'choosedShop',
      eventLabel: `Siec: ${siec} | Adres: ${adres}`
    });
  }

  return result;
}

export default googleAnaliticsMiddleware;
