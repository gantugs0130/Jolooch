import createDataContext from './createDataContext';

// import {not} from "react-native-reanimated";
import {getBooleanValue} from '../constants/Functions';

export const NOTIFICATION_ACTIONS = {
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  SEEN_NOTIFICATION: 'SEEN_NOTIFICATION',
  SEEN_ALL_NOTIFICATIONS: 'SEEN_ALL_NOTIFICATIONS',
};

// const dispatchError = (dispatch, e) => {
// 	dispatch({
// 		type: NOTIFICATION_ACTIONS.UPDATE_ERROR,
// 		payload: e,
// 	});
// };

// const dispatchLoader = (dispatch, isLoading) => {
// 	dispatch({
// 		type: NOTIFICATION_ACTIONS.UPDATE_LOADER,
// 		payload: isLoading,
// 	});
// };

const notificationReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case NOTIFICATION_ACTIONS.SET_NOTIFICATIONS: {
      const {notifications = [], unseenCount = 0} = payload;
      return {...state, notifications, unseenCount};
    }
    case NOTIFICATION_ACTIONS.ADD_NOTIFICATION: {
      const {notification = {}} = payload;
      const {notifications, unseenCount} = state;
      return {
        ...state,
        notifications: [notification, ...notifications],
        unseenCount: unseenCount + 1,
      };
    }
    case NOTIFICATION_ACTIONS.SEEN_NOTIFICATION: {
      const {notifications, unseenCount} = state;
      return {
        ...state,
        notifications: notifications.map(n =>
          n.id === payload ? {...n, seen: true} : n,
        ),
        unseenCount: unseenCount - 1,
      };
    }
    case NOTIFICATION_ACTIONS.SEEN_ALL_NOTIFICATIONS: {
      const {notifications} = state;
      return {
        ...state,
        notifications: notifications.map(n => ({...n, seen: true})),
        unseenCount: 0,
      };
    }
    default:
      return state;
  }
};

const setNotification = dispatch => (notifications = [], unseenCount = 0) => {
  dispatch({
    type: NOTIFICATION_ACTIONS.SET_NOTIFICATIONS,
    payload: {notifications, unseenCount},
  });
};

const addNotification = dispatch => (notification = {}) => {
  dispatch({
    type: NOTIFICATION_ACTIONS.ADD_NOTIFICATION,
    payload: {notification},
  });
};

const seenNotification = dispatch => (id = null) => {
  // instance.post(`notification/${id}/seen`);
  dispatch({type: NOTIFICATION_ACTIONS.SEEN_NOTIFICATION, payload: id});
};
const seenAllNotification = dispatch => () => {
  // instance.post('seller/notification/seen_filtered', {type: 'main'});
  dispatch({type: NOTIFICATION_ACTIONS.SEEN_ALL_NOTIFICATIONS, payload: ''});
};

const initNotification = dispatch => async () => {
  // const res = await instance.get(
  //   'seller/notification?type=main&sort=createdAt&direction=DESC',
  // );
  // if (res.data) {
  //   setNotification(dispatch)([], res.data?.totalUnseen);
  // }
};

const INIT_STATE = {notifications: [], unseenCount: 0};

export const {Provider, Context} = createDataContext(
  notificationReducer,
  {
    setNotification,
    addNotification,
    seenNotification,
    initNotification,
    seenAllNotification,
  },
  INIT_STATE,
);

export function notificationMappingFunc(n = {}) {
  return {
    id: n.hpsNotificationId,
    action: n.action,
    title: `${n.title} : ${n.message}`,
    date: n.createdAt,
    seen: getBooleanValue(n.seen),
    transactionUuid: n.reserved2,
  };
}
