import { useQuasar } from "quasar";

const $q = useQuasar();

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        $q.dialog({
          title:
            "Para mejorar la experiencia es necesario permitir la ubicación",
          message: "Some message",
        }).onOk(() => {
          //reject(error);
        });
      }
    );
  });
};

const getDataDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  const deviceInfo = {
    brand: "",
    model: "",
    os: "",
  };

  if (/android/.test(userAgent)) {
    deviceInfo.brand = window.navigator.appCodeName;
    deviceInfo.model = window.navigator.productSub;
    deviceInfo.os = "Android";
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    deviceInfo.brand = "Apple";
    deviceInfo.model = navigator.platform;
    deviceInfo.os = "iOS";
  } else if (/win/.test(platform)) {
    deviceInfo.brand = "Microsoft";
    deviceInfo.model = "PC";
    deviceInfo.os = platform;
  } else {
    deviceInfo.brand = "Unknown";
    deviceInfo.model = "Unknown";
    deviceInfo.os = "Unknown";
  }

  return deviceInfo;
};

export { getCurrentLocation, getDataDevice };
