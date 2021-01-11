import axios from "axios";
import { getDistance } from "geolib";

module.exports = (app) => {
  const address = async (req, res) => {
    try {
      let { addresses } = req.body;

      let newAddresses = [];

      let addressesReturn = [];

      let finalDistances = [];

      if (addresses.length < 2)
        return res.status(400).send("Insira mais de um endereço");

      for (let i = 0; i < addresses.length; i++) {
        newAddresses[i] = addresses[i]
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .split(" ")
          .join("+");
      }

      for (let i = 0; i < newAddresses.length; i++) {
        let addressFromGoogle = Object;

        const googleAddressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${newAddresses[i]}&key=${process.env.APP_KEY}`;

        addressFromGoogle = await axios.get(googleAddressUrl).catch((err) => {
          console.log(err);
          res.status(500).send(`Erro com a pesquisa do endereço ${element}`);
        });

        addressesReturn.push(addressFromGoogle.data);
      }

      for (let i = 0; i < addressesReturn.length; i++) {
        for (let j = 0; j < addressesReturn.length; j++) {
          if (i !== j && i < j) {
            let distanceObject = {
              location_a: String,
              location_b: String,
              distance: Number,
            };

            distanceObject.location_a =
              addressesReturn[i].results[0].formatted_address;
            distanceObject.location_b =
              addressesReturn[j].results[0].formatted_address;
            distanceObject.distance = getDistance(
              addressesReturn[i].results[0].geometry.location,
              addressesReturn[j].results[0].geometry.location
            );

            finalDistances.push(distanceObject);
          }
        }
      }

      finalDistances = finalDistances.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });

      console.log(finalDistances);

      return res.status(200).send(finalDistances);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Erro");
    }
  };

  return { address };
};
