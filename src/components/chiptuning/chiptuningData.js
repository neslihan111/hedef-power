import {
    adblueDeleteClear,
    adblueRemovalDelete,
    dieselParticulateFilter,
    dsgTuning,
    dsgTuningRemaps,
    egrOff,
    egrRemoval,
    gpfRemoval,
    hardCutLimiter,
    lambda02Delete,
    launchControlTuning,
    mafDelete,
    popcornHardcut,
    speedLimiterRemoval,
    startStopDeleteRemoval,
    swirlFlapRemoval
} from "../../assets/chiptuning";

export const chiptuningServices = [
    {
        id: "chiptuning",
        title: "Chiptuning",
        shortDescription: "Güç ve sürüş karakteri optimizasyonu",
        longDescription: "Aracınızın elektronik kontrol ünitesindeki (ECU) tork ve güç sınırlarını yeniden kalibre ediyoruz. Fabrika toleransları içerisinde kalarak güvenli, dinamik ve esnek bir sürüş karakteri oluşturulur.",
        features: [
            "Optimum güç ve tork artışı",
            "Daha net gaz tepkimesi",
            "Motor sınırlarına zarar vermeyen kalibrasyon",
            "Dengeli yakıt optimizasyonu"
        ],
        image: dsgTuning, // using one of the premium ones
        gallery: []
    },
    {
        id: "adblue-iptali",
        title: "AdBlue İptali",
        shortDescription: "SCR sistemi kaynaklı hatalara çözüm",
        longDescription: "Egzoz emisyon sistemindeki AdBlue (SCR) kaynaklı kronik arızaları ve uyarı kısıtlamalarını yazılımsal olarak çözüme kavuşturuyoruz. Pahalı sensör değişimlerinin önüne geçer.",
        features: [
            "SCR arızalarının kalıcı çözümü",
            "Maliyetli parça değişimlerinden tasarruf",
            "Geri sayım ve marş basmama kısıtlarının kaldırılması"
        ],
        image: adblueDeleteClear,
        gallery: [adblueRemovalDelete]
    },
    {
        id: "dpf-gpf",
        title: "DPF / GPF Çözümleri",
        shortDescription: "Partikül filtre problemlerine yazılımsal çözüm",
        longDescription: "Dizel ve benzinli araçlardaki partikül filtresi (DPF/GPF) tıkanıklığı motorun nefes almasını engeller. Profesyonel yazılım ile bu filtre doluluğuna bağlı arıza semptomlarını kontrol altına alıyoruz.",
        features: [
            "Tıkanıklık kaynaklı çekiş düşüklüğünün çözümü",
            "Sürekli rejenerasyon döngüsü iptali",
            "Daha sağlıklı motor çalışma stabilitesi"
        ],
        image: dieselParticulateFilter,
        gallery: [gpfRemoval]
    },
    {
        id: "dsg-tuning",
        title: "DSG Şanzıman Yazılımı",
        shortDescription: "Daha hızlı ve dengeli vites geçişleri",
        longDescription: "Şanzıman kontrol ünitesindeki (TCU) limitleri güncelleyerek tork aktarım toleranslarını artırıyoruz. Bu sayede daha akıcı hızlanma ve kararlı vites geçişleri elde edilir.",
        features: [
            "Vites geçiş tork limitlerinin optimize edilmesi",
            "Daha hızlı reaksiyon süreleri",
            "Motor gücüne uyumlu şanzıman tepkimesi"
        ],
        image: dsgTuningRemaps,
        gallery: []
    },
    {
        id: "egr-iptali",
        title: "EGR İptali",
        shortDescription: "Kurum ve performans kaybına karşı çözüm",
        longDescription: "Egzoz gazı geri dolaşım (EGR) sisteminin neden olduğu emme manifoldu kirliliği ve düşük devirdeki isteksizliğe karşı ideal bir iyileştirmedir. Yanma odasına her zaman temiz hava girmesini sağlar.",
        features: [
            "Daha keskin gaz tepkisi",
            "Motor içi kurum birikiminin önlenmesi",
            "Pürüzsüz rölanti ve düşük devir bandı yönetimi"
        ],
        image: egrOff,
        gallery: [egrRemoval]
    },
    {
        id: "launch-control",
        title: "Launch Control",
        shortDescription: "Daha agresif ve kontrollü kalkış",
        longDescription: "Sabit araç kalkış devrini sınırlandırarak ve turbo basınç hazırlığını yaparak sıfırdan hızlanma sürelerinizi minimuma indiririz. Yarış otomobili karakteri arayanlar için özel olarak ayarlanır.",
        features: [
            "Daha stabil kalkış devri",
            "Turbo araçlarda ön basınç (boost) hazırlığı",
            "Patolojiyi koruyan devir limiti ayarı"
        ],
        image: launchControlTuning,
        gallery: []
    },
    {
        id: "pop-bang",
        title: "Pop & Bang / Hardcut",
        shortDescription: "Egzoz tepkisini daha agresif hale getirir",
        longDescription: "Gaz kesintilerinde veya vites değişimlerinde emme ve egzoz zamanlamaları ile oynanarak karakteristik bir egzoz patlama sesi (Pop & Bang) oluşturulur. Dizel araçlarda da Hardcut kesici tepkisi uygulanır.",
        features: [
            "Özel ateşleme gecikmesi yönetimi",
            "Agresif egzoz tonu profili",
            "Donanıma uygun seviyelendirilmiş ses ayarı"
        ],
        image: popcornHardcut,
        gallery: [hardCutLimiter]
    },
    {
        id: "hiz-limit",
        title: "Hız Limit Düzenleme",
        shortDescription: "Elektronik hız sınırı yönetimi",
        longDescription: "Pek çok araçta bulunan ve fabrikanın elektronik olarak kilitlediği maksimum hız sınırlarını kaldırıyor veya filo araçları için güvenli hız sınırları tanımlıyoruz.",
        features: [
            "Elektronik son hız limitinin pasifleşimi",
            "İsteğe bağlı güvenlik limitörü ekleme",
            "Motor performansının tamamını kullanma imkanı"
        ],
        image: speedLimiterRemoval,
        gallery: []
    },
    {
        id: "start-stop",
        title: "Start / Stop İptali",
        shortDescription: "Sürüş konforunu artırır",
        longDescription: "Özellikle yoğun trafikte devreye giren ve motor/mekanik aksamı sürekli marş yüküne sokan Start-Stop sistemini yazılımsal olarak varsayılan 'kapalı' (veya kalıcı iptal) konuma getiriyoruz.",
        features: [
            "Akü ve marş dinamosu ömrünün uzaması",
            "Dur-kalk trafikte pürüzsüz sürüş",
            "Sürekli manuel kapatma zorunluluğunun bitmesi"
        ],
        image: startStopDeleteRemoval,
        gallery: []
    },
    {
        id: "lambda",
        title: "Lambda / O2 Sensör Yönetimi",
        shortDescription: "Sensör kaynaklı hata çözümleri",
        longDescription: "Spor egzoz veya downpipe uygulamaları sonrasında arka oksijen sensöründen gelen düşük katalitik konvertör verimi hatalarını (Check Engine) yazılımsal olarak kontrol altına alıyoruz.",
        features: [
            "Downpipe montajı sonrası motor arıza lambasının söndürülmesi",
            "Güvenli sensör eşiği kalibrasyonu",
            "Koruma moduna (limp mode) girilmesinin engellenmesi"
        ],
        image: lambda02Delete,
        gallery: []
    },
    {
        id: "maf",
        title: "MAF Sensör Yönetimi",
        shortDescription: "Hava akış sistemi optimizasyonu",
        longDescription: "Özel güç uygulamalarında (big turbo, custom intake) veya arıza durumlarında, kütlesel hava akış sensörü algoritmalarını optimize ederek MAP bazlı bir okuma sistemine dönüştürüyoruz.",
        features: [
            "Değişen emme sistemine uygun hava ölçümü",
            "Limitsiz hava akış verisi ile güç kaybının önlenmesi",
            "Daha esnek ve kararlı avans yönetimi"
        ],
        image: mafDelete,
        gallery: []
    },
    {
        id: "swirl-flap",
        title: "Swirl Flap Çözümü",
        shortDescription: "Emme sistemi verim optimizasyonu",
        longDescription: "Emme manifoldunda yer alan yönlendirici kelebeklerin (swirl flap) zamanla kurum bağlayarak bozulmasına karşı, flapları yazılımsal olarak devre dışı bırakıyor ve motorun hava alışını düzenliyoruz.",
        features: [
            "Flap arızalarından kaynaklı sarsıntı ve güç düşüklüğünün engellenmesi",
            "Manifold değişim masraflarından kurtulma",
            "Motor içi parça kopma riskini minimize etme"
        ],
        image: swirlFlapRemoval,
        gallery: []
    }
];
