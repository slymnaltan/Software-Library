import jsImage from '../image/js.png';
import pythonImage from '../image/python.png';
import htmlImage from '../image/html.png';
import reactImage from '../image/react.png';
import swiftImage from '../image/swift.png';
import kotlinImage from '../image/kotlin.png';
import flutterImage from '../image/flutter.jpg';
import csharpImage from '../image/csharp.png';
import javaImage from '../image/java.png';
import cppImage from '../image/cpp.jpg';
import phpImage from '../image/php.png';
import yanfoto from '../image/yan foto.jpg';
// Dil bilgilerini içeren nesne listesi

export const languages = [
    {
        id: 1,
        name: 'JavaScript',
        category: 'Web',
        image: jsImage,
        description:'JavaScript (JS) is a powerful and flexible programming language used in web development. Today, it is widely used in both frontend and backend development. It is utilized in web development, mobile application development, and game development.',
        courses: [
            { id: 1, name: "BTK Academy JS Course", url: "https://www.btkakademi.gov.tr/portal/course/javascript-8099", type: "free" },
            { id: 2, name: "Kodluyoruz JS Course", url: "https://www.youtube.com/playlist?list=PLGrTHqyRDvx6PqKkqSPwph57HNN4RWgR2", type: "free" },
            { id: 3, name: "Patika Dev Academy JS Course", url: "https://academy.patika.dev/courses/javascript", type: "free" },
            { id: 4, name: "Enes Bayram JS Course", url: "https://www.youtube.com/playlist?list=PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht", type: "free" },
            { id: 5, name: "Prototurk JS Course", url: "https://www.youtube.com/playlist?list=PLfAfrKyDRWrGIER-yXLliD_47T_5FY8Qd", type: "free" },
            { id: 6, name: "freeCodeCamp JS Course", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5", type: "free" },
            { id: 7, name: "Udemy JS Course", url: "https://www.udemy.com/course/javascriptfundamentals/", type: "free" },
            { id: 8, name: "Brad Traversy JS Course 1", url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 9, name: "Mosh Hamedani JS Course 1", url: "https://www.udemy.com/course/javascript-basics-for-beginners/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 10, name: "Coding Faculty JS Course 1", url: "https://www.udemy.com/course/javascript-for-beginners-introduction-learn-fast-easy/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 11, name: "Jonas Schmedtmann JS Course 1", url: "https://www.udemy.com/course/the-complete-javascript-course/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 2,
        name: 'Python',
        category: 'Data Science',
        image: pythonImage,
        description:'Python is a versatile and powerful programming language renowned for its simplicity and readability. It is extensively used in various fields including web development, data science, artificial intelligence, scientific computing, and more.',
        courses: [
            { id: 1, name: "Kodluyoruz Python Course ", url: "https://www.youtube.com/playlist?list=PLGrTHqyRDvx6x5ZSpVDZ20RN3R0-KpUc3", type: "free" },
            { id: 2, name: "Prototurk Python Course ", url: "https://www.youtube.com/playlist?list=PLfAfrKyDRWrFBOaQdkxBFurPD-o6Lo_E2", type: "free" },
            { id: 3, name: "BTK Academy Python Course ", url: "https://www.btkakademi.gov.tr/portal/course/sifirdan-ileri-seviye-python-programlama-5877", type: "free" },
            { id: 4, name: "PatikaDev Python-temel Course ", url: "https://academy.patika.dev/courses/python-temel", type: "free" },
            { id: 4, name: "PatikaDev Python-ileri Course ", url: "https://academy.patika.dev/tr/courses/ileri-python", type: "free" },
            { id: 5, name: "freeCodeCamp Course ", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB", type: "free" },
            { id: 6, name: "Mustafa Murat Coşkun python Course", url: "https://www.udemy.com/course/sifirdan-ileri-seviyeye-python/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 7, name: "Atıl Samancıoğlu python Course", url: "https://www.udemy.com/course/python-100-gunluk-yazilim-kampi/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 8, name: "Sadık Turan python Course", url: "https://www.udemy.com/course/python-dersleri/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 9, name: "Levent Ertunalılar python Course", url: "https://www.udemy.com/course/python-ile-sifirdan-ileri-seviye-programlama/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 3,
        name: 'HTML - CSS',
        category: 'Web',
        image: htmlImage,
        description:'HTML-CSS are the fundamental technologies used to create and design web pages. While HTML provides the structure and content of a web page, CSS is responsible for the visual presentation, including layout, colors, and fonts.',
        courses: [
            { id: 1, name: "freeCodeCamp HTML-CSS Course ", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88", type: "free" },
            { id: 2, name: "PatikaDev HTML Course ", url: "https://academy.patika.dev/tr/paths", type: "free" },
            { id: 3, name: "PatikaDev CSS Course ", url: "https://academy.patika.dev/courses/css", type: "free" },
            { id: 4, name: "BTK Academy HTML Course ", url: "https://www.btkakademi.gov.tr/portal/course/html5-ile-web-gelistirme-13200", type: "free" },
            { id: 5, name: "BTK Academy CSS Course ", url: "https://www.btkakademi.gov.tr/portal/course/css-7453", type: "free" },
            { id: 6, name: "Kodluyoruz HTML Course ", url: "https://www.youtube.com/playlist?list=PLGrTHqyRDvx7aP99nDNRKDi70bLFr_kX-", type: "free" },
            { id: 7, name: "Kodluyoruz CSS Course ", url: "https://www.youtube.com/playlist?list=PLGrTHqyRDvx501K3-IMgS1fz-KfEB37gM", type: "free" },
            // more courses
        ]
    },
    {
        id: 4,
        name: 'React',
        category: 'Web',
        image: reactImage,
        description:'React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where data changes frequently. It allows developers to create large web applications that can update and render efficiently in response to data changes.React’s combination of efficiency and flexibility.',
        courses: [
            { id: 1, name: "Prototurk React Course ", url: "https://www.youtube.com/playlist?list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-", type: "free" },
            { id: 2, name: "Enes Bayram React Course ", url: "https://www.youtube.com/playlist?list=PLURN6mxdcwL-xIXzq92ZJN9yRW7Q0mjzw", type: "free" },
            { id: 3, name: "PatikaDev React Course ", url: "https://academy.patika.dev/courses/react", type: "free" },
            { id: 4, name: "BTK Academy React Course ", url: "https://www.btkakademi.gov.tr/portal/course/react-ile-web-programciligi-10035", type: "free" },
            { id: 5, name: "freeCodeCamp React Course ", url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=123s", type: "free" },
            { id: 6, name: "Can Boz React Course ", url: "https://www.udemy.com/course/react-egitimi/", type: "paid" },
            { id: 7, name: "Bilgen Academy React Course ", url: "https://www.udemy.com/course/sifirdan-react-kursu-sifirdan-uzmanliga-react-egitimi/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 5,
        name: 'Swift',
        category: 'Mobile',
        image: swiftImage,
        description:'Swift is a powerful and intuitive programming language developed by Apple for building applications on iOS, macOS, watchOS, and tvOS.Swift’s combination of safety, performance, and modern syntax makes it an excellent choice for developing applications across Apple’s ecosystem. ',
        courses: [
            { id: 1, name: "BTK Academy Swift Course ", url: "https://www.btkakademi.gov.tr/portal/course/swift-ile-ios-programlama-12273", type: "free" },
            { id: 2, name: "PatikaDev Swift Course ", url: "https://academy.patika.dev/courses/swift", type: "free" },
            { id: 3, name: "freeCodeCamp Swift Course ", url: "https://www.youtube.com/watch?v=8Xg7E9shq0U", type: "free" },
            { id: 4, name: "Yunus Kocyigit Swift Course ", url: "https://www.udemy.com/course/sifirdan-ios-programlama-ogrenin/", type: "free" },
            { id: 5, name: "Kasım Adalan Swift Course ", url: "https://www.udemy.com/course/ios-mobil-uygulama-gelistirme-egitimi-swift/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 6, name: "Atıl Samancıoğlu Swift Course ", url: "https://www.udemy.com/course/ios-gelistirme-kursu/", type: "paid" },
            { id: 7, name: "SwiftUI-Masterclass Swift Course ", url: "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 6,
        name: 'Kotlin',
        category: 'Mobile',
        image: kotlinImage,
        description:' It is widely used for Android development and has gained popularity for server-side development and web development.Kotlin’s modern features, safety, and interoperability make it an excellent choice for developing a wide range of applications, from Android apps to server-side services and beyond.',
        courses: [
            { id: 1, name: "BTK Academy Kotlin Course ", url: "https://www.btkakademi.gov.tr/portal/course/kotlin-ile-android-mobil-uygulama-gelistirme-temel-seviye-10274", type: "free" },
            { id: 2, name: "PatikaDev Kotlin Course ", url: "https://academy.patika.dev/courses/kotlin", type: "free" },
            { id: 3, name: "freeCodeCamp Kotlin Course ", url: "https://www.youtube.com/watch?v=EExSSotojVI", type: "free" },
            { id: 4, name: "Ali Kahraman Kotlin Course ", url: "https://www.udemy.com/course/android-gelistiriciler-icin-kotlin-kursu/", type: "free" },
            { id: 5, name: "Atıl Samancıoğlu Kotlin Course ", url: "https://www.udemy.com/course/android-o-mobil-uygulama-dersi-kotlin-java/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 6, name: "Denis Panjuta Kotlin Course ", url: "https://www.udemy.com/course/android-kotlin-developer/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 7, name: "Catalian Stefan Kotlin Course ", url: "https://www.udemy.com/course/kotlinmasterclass/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 7,
        name: 'Flutter',
        category: 'Mobile',
        image: flutterImage,
        description:'Flutter is an open-source UI software development toolkit created by Google. It is used for building natively compiled applications for mobile (iOS, Android), web, and desktop from a single codebase.Whether you’re developing for mobile, web, desktop, or beyond, Flutter provides the tools and capabilities to build efficient, scalable, and beautiful applications.',
        courses: [
            { id: 1, name: "Levent Ertunalılar Flutter Course ", url: "https://www.udemy.com/course/android-studio-ile-mobil-uygulama-gelistirme-baslangc/", type: "free" },
            { id: 2, name: "BTK Academy Flutter Course ", url: "https://www.btkakademi.gov.tr/portal/course/google-flutter-ile-mobil-uygulama-10150", type: "free" },
            { id: 3, name: "freeCodeCamp Flutter Course ", url: "https://www.youtube.com/watch?v=VPvVD8t02U8&t=2431s", type: "free" },
            { id: 4, name: "DTech Eğitim Flutter Course ", url: "https://www.youtube.com/playlist?list=PLJbRSPP1eDeWJO9qKA7gI6eExO6ta44pc", type: "free" },
            { id: 5, name: "Maximilian Schwarzmüller Flutter Course ", url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 6, name: "Emre Altunbilek Flutter Course ", url: "https://www.udemy.com/course/sifirdan-flutter-ile-android-ve-ios-apps-development/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 7, name: "Paulina Knopp Flutter Course ", url: "https://www.udemy.com/course/flutter-the-guide-to-build-android-ios-and-web-apps/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 8, name: "Kasım Adalan Flutter Course ", url: "https://www.udemy.com/course/flutter-ile-uygulama-gelistirme-kursu-android-ios/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 8,
        name: 'C#',
        category: 'Web',
        image: csharpImage,
        description:'C# is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework.Designed to be simple, powerful, and versatile, C# is widely used for developing a range of applications, from web services to desktop applications and games.',
        courses: [
            { id: 1, name: "BTK Academy C# Course ", url: "https://www.btkakademi.gov.tr/portal/course/c-7008", type: "free" },
            { id: 2, name: "PatikaDev C# Course ", url: "https://academy.patika.dev/courses/csharp-101", type: "free" },
            { id: 3, name: "Enes Bayram C# Course ", url: "https://www.youtube.com/playlist?list=PLURN6mxdcwL960S-bRuf1F6K09yzNjgcn", type: "free" },
            { id: 4, name: "Engin Demiroğ C# Course ", url: "https://www.youtube.com/playlist?list=PLqG356ExoxZU5keiJwuHDpXqULLffwRYD", type: "free" },
            { id: 5, name: "Murat Yücedağ C# Course ", url: "https://www.udemy.com/course/sifirdan-ileri-seviye-csharp-programlama/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 6, name: "Murat Yücedağ C# OOP Course ", url: "https://www.udemy.com/course/csharp-ile-adim-adim-katmanli-mimari/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 7, name: "Cengiz Atilla C# OOP Course ", url: "https://www.udemy.com/course/c-baslangc-ve-ileri-duzey/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
            // more courses
        ]
    },
    {
        id: 9,
        name: 'Java',
        category: 'Mobil',
        image: javaImage,
        description:'ava is a widely-used, object-oriented programming language developed by Sun Microsystems in 1995, now owned by Oracle. Known for its portability, performance, and robustness, Java is employed in various domains, from web and mobile applications to enterprise systems and scientific computing.',
        courses: [
            { id: 1, name: "BTK Academy Java Course ", url: "https://www.btkakademi.gov.tr/portal/course/java-ile-programlamaya-giris-9617", type: "free" },
            { id: 2, name: "PatikaDev Java-101 Course ", url: "https://academy.patika.dev/courses/java101", type: "free" },
            { id: 3, name: "PatikaDev Java-102 Course ", url: "https://academy.patika.dev/courses/java-102", type: "free" },
            { id: 4, name: "Enes Bayram Java Course ", url: "https://www.youtube.com/playlist?list=PLURN6mxdcwL-l4FHKhu0Ex2zHvxd-7Nlx", type: "free" },
            { id: 5, name: "PatikaDev Java-102 Course ", url: "https://academy.patika.dev/courses/java-102", type: "free" },
            { id: 6, name: "PatikaDev Java-102 Course ", url: "https://academy.patika.dev/courses/java-102", type: "free" },
            { id: 7, name: "Mustafa Murat Coşkun Java Course ", url: "https://www.udemy.com/course/sifirdan-ileri-seviyeye-komple-java-gelistirici-kursu/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 8, name: "Emre Altunbilek Java Course ", url: "https://www.udemy.com/course/sifirdan-zirveye-adim-adim-bol-uygulamali-java-kursu/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 9, name: "Akin Kaldiroglu Java Course ", url: "https://www.udemy.com/course/java-ile-nesne-merkezli-programlamaya-giris/?couponCode=LETSLEARNNOWPP", type: "paid" },
            // more courses
        ]
    },
    {
        id: 10,
        name: 'C++',
        category: 'Data Science',
        image: cppImage,
        description:'C++ is a powerful, high-performance programming language that extends the C programming language with object-oriented features. Whether building system software, high-performance applications, or complex games, C++ provides the tools and capabilities needed for creating efficient and robust software solutions.',
        courses: [
            { id: 1, name: "BTK Academy C++ Course ", url: "https://www.btkakademi.gov.tr/portal/course/c-ile-programlamaya-giris-20172", type: "free" },
            { id: 2, name: "freeCodeCamp C++ Course ", url: "https://www.youtube.com/watch?v=8jLOx1hD3_o", type: "free" },
            { id: 3, name: "Yazılım Teknolojileri C++ Course ", url: "https://www.udemy.com/course/cpp_programlama/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 4, name: "Tim BUchalks C++ Course ", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 5, name: "Codaming C++-OOP Course ", url: "https://www.udemy.com/course/cracking-cpp-interview/", type: "free" },
            { id: 6, name: "Abdul Bari C++ Course ", url: "https://www.udemy.com/course/datastructurescncpp/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 7, name: "John Purcell C++ Course ", url: "https://www.udemy.com/course/free-learn-c-tutorial-beginners/", type: "free" },
            // more courses
        ]
    },
    {
        id: 11,
        name: 'PHP',
        category: 'Web',
        image: phpImage,
        description:'PHP is a popular server-side scripting language designed for web development.PHP is widely used for building dynamic and interactive websites and applications. Its ease of use, integration capabilities, and extensive ecosystem have made it a staple in web development.',
        courses: [
            { id: 1, name: "BTK Academy PHP Course ", url: "https://www.btkakademi.gov.tr/portal/course/php-6509", type: "free" },
            { id: 2, name: "PatikaDev PHP Course ", url: "https://academy.patika.dev/courses/php-temel", type: "free" },
            { id: 3, name: "Emrah Yüksel PHP Course ", url: "https://www.udemy.com/course/sifirdan-ileri-seviye-web-programlama-html-php-pdo-mysql/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 4, name: "Brad Traversy PHP Course ", url: "https://www.udemy.com/course/php-from-scratch-course/?couponCode=LETSLEARNNOWPP", type: "paid" },
            { id: 5, name: "Code College PHP Course ", url: "https://www.udemy.com/course/code-dynamic-websites/", type: "free" },
            // more courses
        ]
    },
    // Diğer diller...
];