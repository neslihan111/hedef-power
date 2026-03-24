import {
    fileReview,
    coldStartOff,
    dpfOff,
    dtcOff,
    egrOff,
    exhaustFlaps,
    gpfOff,
    gearBox,
    hotStartFix,
    launchControl,
    popBang,
    popcorn,
    scrAdblueOff,
    sportDisplay,
    stage1,
    stage2,
    stage3,
    startStopOff,
    swirlFlapOff,
    vmaxOff,
    halfengine,
    immo,
    lambda,
    mapCalibration,
    tva
} from '../../assets/general-services';

export const generalServicesCategories = [
    {
        name: "Performans",
        items: [
            { id: "stage1", title: "Stage 1", shortDesc: "Günlük kullanım için dengeli performans artışı.", longDesc: "Motor içi donanım değişikliği gerektirmeden, sadece yazılımsal optimizasyon ile günlük kullanıma uygun dengeli tork ve güç artışı sağlayan baz performans paketidir.", icon: stage1 },
            { id: "stage2", title: "Stage 2", shortDesc: "Daha güçlü sürüş karakteri için ileri seviye yazılım.", longDesc: "Downpipe ve performans hava filtresi gibi donanımsal değişikliklerle desteklenmesi gereken, üst devir bandının agresifleştiği ileri seviye performans yapılandırmasıdır.", icon: stage2 },
            { id: "stage3", title: "Stage 3", shortDesc: "Yüksek performans hedefleyen özel yapılandırma.", longDesc: "Büyük turbo, enjektör, intercooler gibi donanım güncellemeleri yapılmış araçlar için tasarlanan yarış tipi limit kullanım performans yazılımıdır.", icon: stage3 },
            { id: "launch-control", title: "Launch Control", shortDesc: "Daha kontrollü ve sportif kalkış desteği.", longDesc: "Araç kalkarken turbo basıncının dolmasını sağlayan ve lastik tutunmasını maksimize edecek şekilde sabit devir kısıtlaması uygulayan yarış kalkış sistemidir.", icon: launchControl },
            { id: "pop-bang", title: "Pop & Bang", shortDesc: "Egzoz tepkisinde daha agresif karakter.", longDesc: "Gaz pedalı bırakıldığında emme/egzoz senkronizasyonu ile oynanarak sistemde akustik patlamaların (çatırdamaların) oluşmasını sağlayan sürüş odaklı özelliktir.", icon: popBang },
            { id: "popcorn", title: "Popcorn", shortDesc: "Dizel araçlarda karakteristik kesici sesi.", longDesc: "Genellikle dizel (hardcut limiter) ve bazı benzinli araçlarda, devir kesici noktasına gelindiğinde oluşan agresif ve kesik patlama tarzı vuruntu sesidir.", icon: popcorn },
            { id: "sport-display", title: "Sport Display", shortDesc: "Sürüş verilerinin daha sportif gösterimi.", longDesc: "Araç içi multimedya ünitesindeki sürüş mod ekranında görüntülenen tork ve güç kadran sınırlarının, artırılan yeni performans değerlerini gösterecek şekilde kalibre edilmesidir.", icon: sportDisplay }
        ]
    },
    {
        name: "Emisyon / Sistem",
        items: [
            { id: "dpf-off", title: "DPF OFF", shortDesc: "Partikül filtre sistemine yönelik yazılımsal düzenleme.", longDesc: "Dizel araçlardaki dolu partikül filtresinin iptali sonrasında, sistemin rejenerasyon denemesini engellemek için filtre kontrol algoritmalarının devre dışı bırakılmasıdır.", icon: dpfOff },
            { id: "gpf-off", title: "GPF OFF", shortDesc: "Benzinli partikül filtresi çözümleri.", longDesc: "Yeni nesil benzinli motorlarda bulunan partikül filtresinin (OPF/GPF) mekanik olarak çıkarılması ardından yazılımsal olarak devre dışı bırakılarak arıza lambasının söndürülmesidir.", icon: gpfOff },
            { id: "egr-off", title: "EGR OFF", shortDesc: "EGR kaynaklı sürüş ve hata problemlerine çözüm.", longDesc: "Kurum birikimi ve tıkanma sebebiyle alt devir performansını düşüren Egzoz Gazı Geri Çevrim valfinin kapalı konumda kalması ve arıza kaydı üretmemesi için yapılan kalibrasyondur.", icon: egrOff },
            { id: "adblue-off", title: "AdBlue OFF", shortDesc: "SCR sistemi ve ilgili uyarı yönetimi.", longDesc: "Sürekli arıza veren AdBlue emisyon modülünün, seviye, kalite ve pompa devizör kaynaklı hatalarını durdurarak marş kısıtlamasının ömür boyu engellenmesi işlemidir.", icon: scrAdblueOff },
            { id: "lambda", title: "Lambda", shortDesc: "Oksijen sensörü kaynaklı arızaların giderilmesi.", longDesc: "Spor egzoz tasarımları sonrasında arka Lambda (O2) sensörünün katalitik konvertör yetersiz verimi hatası (Check Engine) yakmasını yazılımdan tamamen silme prosedürüdür.", icon: lambda },
            { id: "swirl-flap-off", title: "Swirl Flap OFF", shortDesc: "Emme manifoldu arızalarına çözüm.", longDesc: "Zamanla bozulan emme manifoldu yönlendirici kelebeklerinin mekanik arızasından kurtulmak amacıyla sensör okumasının devre dışı bırakılmasıdır.", icon: swirlFlapOff },
            { id: "exhaust-flaps", title: "Exhaust Flaps", shortDesc: "Egzoz valfleri aktif kapanma kontrolü.", longDesc: "Araç özelliklerine bağlı olarak egzoz kelebeklerinin (Flap) sistem davranışını, daima açık ya da performans odaklı reaksiyon verecek şekilde ayarlama yönetimidir.", icon: exhaustFlaps }
        ]
    },
    {
        name: "Sürüş / Konfor",
        items: [
            { id: "start-stop-off", title: "Start / Stop OFF", shortDesc: "Sürüş konforunu artıran düzenleme.", longDesc: "Sürekli dur/kalk trafikte motor dinamolarını ve konforu zorlayan Start-Stop donanımının, varsayılan olarak kapalı (disabled) döngüsüne alınmasıdır.", icon: startStopOff },
            { id: "cold-start-off", title: "Cold Start OFF", shortDesc: "İlk çalışma anındaki yüksek rölanti yönetimi.", longDesc: "Motor soğukken katalitik konvertörü ısıtmak amacıyla oluşan aşırı devirli çalışmayı iptal ederek motorun ilk marş itibariyle sakin ve normal rölantide başlamasının sağlanmasıdır.", icon: coldStartOff },
            { id: "hot-start-fix", title: "Hot Start Fix", shortDesc: "Sıcak çalıştırma problemlerine çözüm.", longDesc: "Özellikle bazı Alman üreticilerinde motor sıcakken geç çalışma (marş tepkisizleşmesi) kronik karakterinin, enjeksiyon parametreleriyle oynanarak sonsuza kadar çözülmesidir.", icon: hotStartFix },
            { id: "vmax-off", title: "Vmax OFF", shortDesc: "Elektronik hız sınırı yönetimi.", longDesc: "Fabrika çıkışı belirli hız limitsörleriyle (örn; 250 km/s) kısıtlanmış araçların sınır noktalarının kaldırılıp, motor dizaynının izin verdiği maksimum hıza (Vmax) erişim iznidir.", icon: vmaxOff },
            { id: "gearbox", title: "GearBox", shortDesc: "Şanzıman kontrol optimizasyon entegrasyonu.", longDesc: "Otomatik vites (DSG vb.) araçlarda geçiş tork tepkisini hızlandırmaya ve vites kısıtlamalarını esneterek güç dengesi kurmaya yarayan şanzıman verimliliği düzenlemesidir.", icon: gearBox }
        ]
    },
    {
        name: "Teknik / Yazılım",
        items: [
            { id: "dtc-off", title: "DTC OFF", shortDesc: "Spesifik arıza hata kodlarının silinmesi.", longDesc: "Motor ünitesinde mekanik tarafı çözülmese bile ısrarla motor arıza lambasını(MIL) yakan özel Hata Kodlarının(DTC) kalıcı olarak Diagnostic tablosundan maskelenmesidir.", icon: dtcOff },
            { id: "immo-off", title: "IMMO OFF", shortDesc: "Sensör eşleşme kaynaklı güvenlik yönetimi.", longDesc: "Güvenlik çipi, motor beyni ve kontak eşleşmesini iptal ederek Immobilizer anahtar iletişim korumasını pasif hale getirme sistemidir, çoğunlukla yarış motorlarına uygulanır.", icon: immo },
            { id: "file-review", title: "File Review", shortDesc: "Mevcut yazılım dosyasının teknik analizi.", longDesc: "Araçtaki mevcut modifiyeli yazılım dosyasının (Tuning File) uzmanlarca çekilip güvenlik sınırlarının ve potansiyel tehlikelerinin detaylı teknik analizleridir.", icon: fileReview },
            { id: "map-calibration", title: "Map Calibration", shortDesc: "Yazılım haritası optimizasyonu.", longDesc: "Yeniden yapılandırılmış motor bileşenlerine göre, yanma eğrisi ve sensör parametrelerinin(haritanın) milimetrik düzenlemelerle mükemmel bir optimizasyon sürecidir.", icon: mapCalibration },
            { id: "half-engine-off", title: "Half Engine OFF", shortDesc: "Motor koruma mod limiti kısıtının çözümü.", longDesc: "Araçta sensör hatası sebebiyle devreye giren Yarım Motor(Half Engine/Limp Mode) güç kesintisinin, arızaya odaklanmaksızın devreden çıkartılarak tam güç iletiminin sağlanmasıdır.", icon: halfengine },
            { id: "tva", title: "TVA", shortDesc: "Gaz kelebeği sistemi tolerans yönetimi.", longDesc: "Elektronik Throttle Valve Actuator (Kısma Kelebeği) sisteminde oluşan ve güç kaybına varan tolerans boşluklarını ortadan kaldırmak için aktüatör senkronizasyonu.", icon: tva }
        ]
    }
];
