const User = require('../models/userSchema');
const bcrypt =require('bcrypt');
const seedUser = async () => {
  try {

    const users = [
  {
    "name": "Ahmed Ibrahim",
    "email": "ahmed.ibrahim@example.com",
    "password": "hashed_password_1",
    "role": "user",
    "phone": "01076771293"
  },
  {
    "name": "Fatima Ali",
    "email": "fatima.ali@example.com",
    "password": "hashed_password_2",
    "role": "user",
    "phone": "01092708593"
  },
  {
    "name": "Mohammed Hassan",
    "email": "mohammed.hassan@example.com",
    "password": "hashed_password_3",
    "role": "user",
    "phone": "01146985168"
  },
  {
    "name": "Aisha Mahmoud",
    "email": "aisha.mahmoud@example.com",
    "password": "hashed_password_4",
    "role": "user",
    "phone": "01224046561"
  },
  {
    "name": "Omar Nabil",
    "email": "omar.nabil@example.com",
    "password": "hashed_password_5",
    "role": "user",
    "phone": "01174921227"
  },
  {
    "name": "Layla Kamal",
    "email": "layla.kamal@example.com",
    "password": "hashed_password_6",
    "role": "user",
    "phone": "01072829749"
  },
  {
    "name": "Youssef Adel",
    "email": "youssef.adel@example.com",
    "password": "hashed_password_7",
    "role": "user",
    "phone": "01167583046"
  },
  {
    "name": "Mariam Tarek",
    "email": "mariam.tarek@example.com",
    "password": "hashed_password_8",
    "role": "user",
    "phone": "01113431660"
  },
  {
    "name": "Khaled Hamdy",
    "email": "khaled.hamdy@example.com",
    "password": "hashed_password_9",
    "role": "user",
    "phone": "01242720512"
  },
  {
    "name": "Amina Saber",
    "email": "amina.saber@example.com",
    "password": "hashed_password_10",
    "role": "user",
    "phone": "01019917183"
  },
  {
    "name": "Mostafa Gamal",
    "email": "mostafa.gamal@example.com",
    "password": "hashed_password_11",
    "role": "user",
    "phone": "01166945892"
  },
  {
    "name": "Noura Ashraf",
    "email": "noura.ashraf@example.com",
    "password": "hashed_password_12",
    "role": "user",
    "phone": "01052543463"
  },
  {
    "name": "Hossam Fawzy",
    "email": "hossam.fawzy@example.com",
    "password": "hashed_password_13",
    "role": "user",
    "phone": "01215244705"
  },
  {
    "name": "Yasmine Hatem",
    "email": "yasmine.hatem@example.com",
    "password": "hashed_password_14",
    "role": "user",
    "phone": "01215159055"
  },
  {
    "name": "Karim Essam",
    "email": "karim.essam@example.com",
    "password": "hashed_password_15",
    "role": "user",
    "phone": "01214619858"
  },
  {
    "name": "Mona Rady",
    "email": "mona.rady@example.com",
    "password": "hashed_password_16",
    "role": "user",
    "phone": "01233549971"
  },
  {
    "name": "Tamer Hosny",
    "email": "tamer.hosny@example.com",
    "password": "hashed_password_17",
    "role": "user",
    "phone": "01277374944"
  },
  {
    "name": "Heba Magdy",
    "email": "heba.magdy@example.com",
    "password": "hashed_password_18",
    "role": "user",
    "phone": "01219254104"
  },
  {
    "name": "Wael Gomaa",
    "email": "wael.gomaa@example.com",
    "password": "hashed_password_19",
    "role": "user",
    "phone": "01171782209"
  },
  {
    "name": "Rania Youssef",
    "email": "rania.youssef@example.com",
    "password": "hashed_password_20",
    "role": "user",
    "phone": "01098294260"
  },
  {
    "name": "Mahmoud Said",
    "email": "mahmoud.said@example.com",
    "password": "hashed_password_21",
    "role": "user",
    "phone": "01018319482"
  },
  {
    "name": "Salma Hany",
    "email": "salma.hany@example.com",
    "password": "hashed_password_22",
    "role": "user",
    "phone": "01139551935"
  },
  {
    "name": "Adel Imam",
    "email": "adel.imam@example.com",
    "password": "hashed_password_23",
    "role": "user",
    "phone": "01147782902"
  },
  {
    "name": "Dina Shawky",
    "email": "dina.shawky@example.com",
    "password": "hashed_password_24",
    "role": "user",
    "phone": "01086449445"
  },
  {
    "name": "Amr Diab",
    "email": "amr.diab@example.com",
    "password": "hashed_password_25",
    "role": "user",
    "phone": "01263784041"
  },
  {
    "name": "Sarah Ahmed",
    "email": "sarah.ahmed@example.com",
    "password": "hashed_password_26",
    "role": "user",
    "phone": "01191900636"
  },
  {
    "name": "Hassan Mohamed",
    "email": "hassan.mohamed@example.com",
    "password": "hashed_password_27",
    "role": "user",
    "phone": "01295772175"
  },
  {
    "name": "Nada Mahmoud",
    "email": "nada.mahmoud@example.com",
    "password": "hashed_password_28",
    "role": "user",
    "phone": "01095377273"
  },
  {
    "name": "Ibrahim Nour",
    "email": "ibrahim.nour@example.com",
    "password": "hashed_password_29",
    "role": "user",
    "phone": "01146087712"
  },
  {
    "name": "Hala Sherif",
    "email": "hala.sherif@example.com",
    "password": "hashed_password_30",
    "role": "user",
    "phone": "01051723049"
  },
  {
    "name": "Sherif Mounir",
    "email": "sherif.mounir@example.com",
    "password": "hashed_password_31",
    "role": "user",
    "phone": "01012941228"
  },
  {
    "name": "Nour Elsayed",
    "email": "nour.elsayed@example.com",
    "password": "hashed_password_32",
    "role": "user",
    "phone": "01136526008"
  },
  {
    "name": "Waleed Fawzy",
    "email": "waleed.fawzy@example.com",
    "password": "hashed_password_33",
    "role": "user",
    "phone": "01091079402"
  },
  {
    "name": "Reem Ahmed",
    "email": "reem.ahmed@example.com",
    "password": "hashed_password_34",
    "role": "user",
    "phone": "01174371751"
  },
  {
    "name": "Ali Mansour",
    "email": "ali.mansour@example.com",
    "password": "hashed_password_35",
    "role": "user",
    "phone": "01281760472"
  },
  {
    "name": "Menna Arafa",
    "email": "menna.arafa@example.com",
    "password": "hashed_password_36",
    "role": "user",
    "phone": "01269121551"
  },
  {
    "name": "Tarek Nour",
    "email": "tarek.nour@example.com",
    "password": "hashed_password_37",
    "role": "user",
    "phone": "01134519252"
  },
  {
    "name": "Doaa Salah",
    "email": "doaa.salah@example.com",
    "password": "hashed_password_38",
    "role": "user",
    "phone": "01190653312"
  },
  {
    "name": "Kareem Mohamed",
    "email": "kareem.mohamed@example.com",
    "password": "hashed_password_39",
    "role": "user",
    "phone": "01294930106"
  },
  {
    "name": "Eman Hassan",
    "email": "eman.hassan@example.com",
    "password": "hashed_password_40",
    "role": "user",
    "phone": "01199669360"
  },
  {
    "name": "Sameh Hussein",
    "email": "sameh.hussein@example.com",
    "password": "hashed_password_41",
    "role": "user",
    "phone": "01291988921"
  },
  {
    "name": "Dalia Samir",
    "email": "dalia.samir@example.com",
    "password": "hashed_password_42",
    "role": "user",
    "phone": "01052274616"
  },
  {
    "name": "Ashraf Zaki",
    "email": "ashraf.zaki@example.com",
    "password": "hashed_password_43",
    "role": "user",
    "phone": "01077744877"
  },
  {
    "name": "Lobna Amir",
    "email": "lobna.amir@example.com",
    "password": "hashed_password_44",
    "role": "user",
    "phone": "01172429001"
  },
  {
    "name": "Nabil Farouk",
    "email": "nabil.farouk@example.com",
    "password": "hashed_password_45",
    "role": "user",
    "phone": "01052425133"
  },
  {
    "name": "Esraa Yousef",
    "email": "esraa.yousef@example.com",
    "password": "hashed_password_46",
    "role": "user",
    "phone": "01199971206"
  },
  {
    "name": "Hazem Emam",
    "email": "hazem.emam@example.com",
    "password": "hashed_password_47",
    "role": "user",
    "phone": "01147656401"
  },
  {
    "name": "Maha Hassan",
    "email": "maha.hassan@example.com",
    "password": "hashed_password_48",
    "role": "user",
    "phone": "01090616432"
  },
  {
    "name": "Taha Hussein",
    "email": "taha.hussein@example.com",
    "password": "hashed_password_49",
    "role": "user",
    "phone": "01273533364"
  },
  {
    "name": "Lina Hamed",
    "email": "lina.hamed@example.com",
    "password": "hashed_password_50",
    "role": "user",
    "phone": "01061798488"
  },
  {
    "name": "Bassem Youssef",
    "email": "bassem.youssef@example.com",
    "password": "hashed_password_51",
    "role": "user",
    "phone": "01014402048"
  },
  {
    "name": "Hind Sabry",
    "email": "hind.sabry@example.com",
    "password": "hashed_password_52",
    "role": "user",
    "phone": "01068103389"
  },
  {
    "name": "Samy Adel",
    "email": "samy.adel@example.com",
    "password": "hashed_password_53",
    "role": "user",
    "phone": "01084286370"
  },
  {
    "name": "Farida Alaa",
    "email": "farida.alaa@example.com",
    "password": "hashed_password_54",
    "role": "user",
    "phone": "01030109508"
  },
  {
    "name": "Hesham Maged",
    "email": "hesham.maged@example.com",
    "password": "hashed_password_55",
    "role": "user",
    "phone": "01179117751"
  },
  {
    "name": "Shereen Ahmed",
    "email": "shereen.ahmed@example.com",
    "password": "hashed_password_56",
    "role": "user",
    "phone": "01141078803"
  },
  {
    "name": "Fady Gerges",
    "email": "fady.gerges@example.com",
    "password": "hashed_password_57",
    "role": "user",
    "phone": "01023194410"
  },
  {
    "name": "Maya Khalil",
    "email": "maya.khalil@example.com",
    "password": "hashed_password_58",
    "role": "user",
    "phone": "01042655904"
  },
  {
    "name": "Ziad Ragab",
    "email": "ziad.ragab@example.com",
    "password": "hashed_password_59",
    "role": "user",
    "phone": "01276384487"
  },
  {
    "name": "Leila Saad",
    "email": "leila.saad@example.com",
    "password": "hashed_password_60",
    "role": "user",
    "phone": "01060806674"
  },
  {
    "name": "Marwan Mohsen",
    "email": "marwan.mohsen@example.com",
    "password": "hashed_password_61",
    "role": "user",
    "phone": "01259008129"
  },
  {
    "name": "Yara Nader",
    "email": "yara.nader@example.com",
    "password": "hashed_password_62",
    "role": "user",
    "phone": "01113873751"
  },
  {
    "name": "Magdy Yacoub",
    "email": "magdy.yacoub@example.com",
    "password": "hashed_password_63",
    "role": "user",
    "phone": "01021379539"
  },
  {
    "name": "Nadia Ahmed",
    "email": "nadia.ahmed@example.com",
    "password": "hashed_password_64",
    "role": "user",
    "phone": "01257194749"
  },
  {
    "name": "Mazen Hamza",
    "email": "mazen.hamza@example.com",
    "password": "hashed_password_65",
    "role": "user",
    "phone": "01278874287"
  },
  {
    "name": "Nesma Mahfouz",
    "email": "nesma.mahfouz@example.com",
    "password": "hashed_password_66",
    "role": "user",
    "phone": "01061505485"
  },
  {
    "name": "Hamza Ali",
    "email": "hamza.ali@example.com",
    "password": "hashed_password_67",
    "role": "user",
    "phone": "01276385526"
  },
  {
    "name": "Rana Sameh",
    "email": "rana.sameh@example.com",
    "password": "hashed_password_68",
    "role": "user",
    "phone": "01017642558"
  },
  {
    "name": "Fares Helmy",
    "email": "fares.helmy@example.com",
    "password": "hashed_password_69",
    "role": "user",
    "phone": "01013087413"
  },
  {
    "name": "Abeer Essam",
    "email": "abeer.essam@example.com",
    "password": "hashed_password_70",
    "role": "user",
    "phone": "01182835100"
  },
  {
    "name": "Haytham Nabil",
    "email": "haytham.nabil@example.com",
    "password": "hashed_password_71",
    "role": "user",
    "phone": "01056887993"
  },
  {
    "name": "Ghada Abdel Razek",
    "email": "ghada.abdelrazek@example.com",
    "password": "hashed_password_72",
    "role": "user",
    "phone": "01297154056"
  },
  {
    "name": "Nour Ehab",
    "email": "nour.ehab@example.com",
    "password": "hashed_password_73",
    "role": "user",
    "phone": "01120763166"
  },
  {
    "name": "Samira Said",
    "email": "samira.said@example.com",
    "password": "hashed_password_74",
    "role": "user",
    "phone": "01143139386"
  },
  {
    "name": "Amgad Fahmy",
    "email": "amgad.fahmy@example.com",
    "password": "hashed_password_75",
    "role": "user",
    "phone": "01146538235"
  },
  {
    "name": "Hanaa Mostafa",
    "email": "hanaa.mostafa@example.com",
    "password": "hashed_password_76",
    "role": "user",
    "phone": "01174938568"
  },
  {
    "name": "Hesham Selim",
    "email": "hesham.selim@example.com",
    "password": "hashed_password_77",
    "role": "user",
    "phone": "01267126720"
  },
  {
    "name": "Malak Zaher",
    "email": "malak.zaher@example.com",
    "password": "hashed_password_78",
    "role": "user",
    "phone": "01239675553"
  },
  {
    "name": "Ramy Gamal",
    "email": "ramy.gamal@example.com",
    "password": "hashed_password_79",
    "role": "user",
    "phone": "01221760978"
  },
  {
    "name": "Basma Ahmed",
    "email": "basma.ahmed@example.com",
    "password": "hashed_password_80",
    "role": "user",
    "phone": "01188122005"
  },
  {
    "name": "Fathi Abdel Wahab",
    "email": "fathi.abdelwahab@example.com",
    "password": "hashed_password_81",
    "role": "user",
    "phone": "01059606474"
  },
  {
    "name": "Marwa Hisham",
    "email": "marwa.hisham@example.com",
    "password": "hashed_password_82",
    "role": "user",
    "phone": "01258577993"
  },
  {
    "name": "Tamer Ashour",
    "email": "tamer.ashour@example.com",
    "password": "hashed_password_83",
    "role": "user",
    "phone": "01076729063"
  },
  {
    "name": "Nelly Karim",
    "email": "nelly.karim@example.com",
    "password": "hashed_password_84",
    "role": "user",
    "phone": "01048664343"
  },
  {
    "name": "Khaled Saleh",
    "email": "khaled.saleh@example.com",
    "password": "hashed_password_85",
    "role": "user",
    "phone": "01210070592"
  },
  {
    "name": "Naglaa Fathy",
    "email": "naglaa.fathy@example.com",
    "password": "hashed_password_86",
    "role": "user",
    "phone": "01250696930"
  },
  {
    "name": "Hamdy El Merg",
    "email": "hamdy.elmerg@example.com",
    "password": "hashed_password_87",
    "role": "user",
    "phone": "01220311293"
  },
  {
    "name": "Yasmin Raeis",
    "email": "yasmin.raeis@example.com",
    "password": "hashed_password_88",
    "role": "user",
    "phone": "01046285746"
  },
  {
    "name": "Ramez Galal",
    "email": "ramez.galal@example.com",
    "password": "hashed_password_89",
    "role": "user",
    "phone": "01155782313"
  },
  {
    "name": "Sandra Nassief",
    "email": "sandra.nassief@example.com",
    "password": "hashed_password_90",
    "role": "user",
    "phone": "01265665981"
  },
  {
    "name": "Maged El Masry",
    "email": "maged.elmasry@example.com",
    "password": "hashed_password_91",
    "role": "user",
    "phone": "01130110789"
  },
  {
    "name": "Somaya El Khashab",
    "email": "somaya.elkhashab@example.com",
    "password": "hashed_password_92",
    "role": "user",
    "phone": "01174830864"
  },
  {
    "name": "Ahmad Helmy",
    "email": "ahmad.helmy@example.com",
    "password": "hashed_password_93",
    "role": "user",
    "phone": "01112679180"
  },
  {
    "name": "Mai Ezz Eldin",
    "email": "mai.ezzeldin@example.com",
    "password": "hashed_password_94",
    "role": "user",
    "phone": "01141799293"
  },
  {
    "name": "Hany Salama",
    "email": "hany.salama@example.com",
    "password": "hashed_password_95",
    "role": "user",
    "phone": "01014728637"
  },
  {
    "name": "Nicole Saba",
    "email": "nicole.saba@example.com",
    "password": "hashed_password_96",
    "role": "user",
    "phone": "01028386684"
  },
  {
    "name": "Mohamed Henedy",
    "email": "mohamed.henedy@example.com",
    "password": "hashed_password_97",
    "role": "user",
    "phone": "01288170019"
  },
  {
    "name": "Youssra",
    "email": "youssra@example.com",
    "password": "hashed_password_98",
    "role": "user",
    "phone": "01279920647"
  },
  {
    "name": "Hassan El Raddad",
    "email": "hassan.elraddad@example.com",
    "password": "hashed_password_99",
    "role": "user",
    "phone": "01160965065"
  },
  {
    "name": "Rania Essa",
    "email": "raniaessa651@gmail.com",
    "password": "raniaessa17",
    "role": "admin",
    "phone": "01096596225"
  },
   
]

  const hashedUsers = await Promise.all(
      users.map(async user => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    await User.deleteMany({});

    // Insert the users
    await User.insertMany(hashedUsers);
    console.log('Users seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

    module.exports = seedUser; 