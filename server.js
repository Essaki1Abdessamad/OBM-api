const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const Role = db.role;
const dbConfig = require ("./app/config/db.config")
const app = express();

const createCampaign = require('./app/routes/CreateCampaignAPI');
const saveCampaign = require('./app/routes/CampaignDB');
const getCampaign = require('./app/routes/CampaignDB');
const deleteCampaingFBapi = require('./app/routes/DeleteCampaingFBapi');
const deleteCampaingFBdb = require('./app/routes/CampaignDB');
const updateCampaign = require('./app/routes/CampaignDB');
const updateCampaignAPI = require('./app/routes/UpdateCampaignAPI');
const searchAudianceAPI = require('./app/routes/searchAudianceAPI');
const searchInterestsAPI = require('./app/routes/searchInterestsAPI');
const createAdsetsAPI = require('./app/routes/CreateAdsetsAPI');
const saveAdsets = require('./app/routes/AdsetsDB');
const adCreativeAPI = require('./app/routes/CreateAdCreativeAPI');
const createAdAPI = require('./app/routes/CreateAdAPI');
const saveAdCreative = require('./app/routes/AdCreativeDB');
const getAdsets = require('./app/routes/AdsetsDB');
const getAdCreative = require('./app/routes/AdCreativeDB');
const saveAds = require('./app/routes/AdsDB');
const getAdsetsID = require('./app/routes/AdsetsDB');
const getAdID = require('./app/routes/AdsDB');
const updateAdsetsAPI = require('./app/routes/UpdateAdsetsAPI');
const updateAdsAPI = require('./app/routes/UpdateAdsAPI');
const updateAdsDB = require('./app/routes/AdsDB');
const updateAdsetsDB = require('./app/routes/AdsetsDB');
const getAd = require('./app/routes/AdsDB');
const updateAdCreative = require('./app/routes/AdCreativeDB');
const deleteAdCreative = require('./app/routes/AdCreativeDB');
const updateAdCreativeAPI = require('./app/routes/UpdateAdCreativeAPI');
const deleteAdCreativeAPI = require('./app/routes/deleteAdCreativeAPI');
const deleteAdsetsAPI = require('./app/routes/deleteAdsetsAPI');
const deleteAdsAPI = require('./app/routes/deleteAdsAPI');
const GetCampaings = require('./app/routes/GoogleAPI/GetCampaings');
const AccessibleCustomers = require('./app/routes/GoogleAPI/AccessibleCustomers');
const CreateCampaings = require('./app/routes/GoogleAPI/CreateCampaings');


var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(express.json())
app.use(cors())
app.use('/app', createCampaign)
app.use('/app', saveCampaign)
app.use('/app', getCampaign)
app.use('/app', deleteCampaingFBapi)
app.use('/app', deleteCampaingFBdb)
app.use('/app', updateCampaign)
app.use('/app', updateCampaignAPI)
app.use('/app', searchAudianceAPI)
app.use('/app', searchInterestsAPI)
app.use('/app', createAdsetsAPI)
app.use('/app', saveAdsets)
app.use('/app', adCreativeAPI)
app.use('/app', createAdAPI)
app.use('/app', saveAdCreative)
app.use('/app', getAdsets)
app.use('/app', getAdCreative)
app.use('/app', saveAds)
app.use('/app', getAdsetsID)
app.use('/app', getAdID)
app.use('/app', updateAdsetsAPI)
app.use('/app', updateAdsAPI)
app.use('/app', updateAdsDB)
app.use('/app', updateAdsetsDB)
app.use('/app', getAd)
app.use('/app', updateAdCreative)
app.use('/app', deleteAdCreative)
app.use('/app', updateAdCreativeAPI)
app.use('/app', deleteAdCreativeAPI)
app.use('/app', deleteAdsetsAPI)
app.use('/app', deleteAdsAPI)
app.use('/app', GetCampaings)
app.use('/app', AccessibleCustomers)
app.use('/app', CreateCampaings)


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});