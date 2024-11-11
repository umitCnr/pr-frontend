import React, {useEffect, useState} from "react";
import resim from './../../icons/fish1.png'
import './FishTextDesing.css';

const FishText = () => {

    const [scale, setScale] = useState(1);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = 200;
            const maxScale = 500;

            if (scrollY > triggerHeight) {
                const newScale = Math.min(1 + (scrollY - triggerHeight) / 10000, maxScale / 100);
                setScale(newScale);
            } else {
                setScale(1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const handleMouseMove = (event) => {

        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const rotateX = (clientY - centerY) / height * -30;
        const rotateY = (clientX - centerX) / width * 30;

        setTilt({ rotateX, rotateY });
    };

    return(
        <div className={"fish-text"}>
            <div className="scroll-container">
                <div   onMouseMove={handleMouseMove}
                       onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
                       style={{
                           transform: `perspective(500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                       }} className="arka">
                    <img
                        className="image-aquarium"
                        src={resim}
                        alt="Aquarium"
                        style={{ transform: `scale(${scale})` }}
                    />
                </div>
                <div className={"text"}>
                    <p className="fishcare-text">
                        Balık beslemek, hem eğlenceli hem de öğretici bir hobidir. Akvaryumda balık beslerken, onların sağlığına dikkat etmek çok önemlidir. Doğru su koşulları, uygun akvaryum boyutu ve uyumlu balık türleri seçmek, başarılı bir balık bakımı için temel faktörlerdir. Balıkların düzenli olarak beslenmesi, suyun temizliği ve doğru sıcaklık gibi unsurlar, sağlıklı bir yaşam sürmeleri için gereklidir.
                        Akvaryumda balıkların yalnızca su kalitesi değil, çevre şartları da çok önemlidir. Akvaryumun yerleştirileceği alan, ışıklandırma ve sıcaklık düzenlemeleri doğru yapılmalıdır. Akvaryumda doğal bitkiler ve taşlar kullanarak balıklara doğal bir yaşam alanı yaratabilirsiniz. Ayrıca, balıkların psikolojik ve fiziksel sağlığı için sakin, stresten uzak bir ortam sağlamak gerekir.
                        Balıklar düzenli olarak beslenmeli, ancak fazla yemleme yapılmamalıdır. Fazla yemek, suyun kirlenmesine ve balıkların sağlığının bozulmasına neden olabilir. Her balık türü farklı beslenme gereksinimlerine sahip olduğundan, besleme alışkanlıkları hakkında bilgi sahibi olmak gereklidir. Bunun dışında, akvaryumda yer alan filtre sistemleri ve su değişimleri de balıkların sağlığı açısından oldukça kritik faktörlerdir.
                        Akvaryumda balıkların davranışlarını gözlemlemek, bu hobiyi daha keyifli hale getirir. Balıklar gruplar halinde yaşadıklarında sosyal etkileşimlere girerler ve bu da izleyen kişiler için büyüleyici bir deneyim sunar. Akvaryumunuzu zaman içinde düzenli olarak bakım yaparak ve doğru ekipmanları kullanarak balıklarınızın sağlıklı bir şekilde büyümesini sağlayabilirsiniz.
                        Balık beslemek aynı zamanda sabır ve özen gerektiren bir süreçtir. Her ne kadar akvaryum bakımını öğrenmek başlangıçta biraz karmaşık olsa da, doğru adımları takip ettiğinizde balıklarınız sağlıklı ve mutlu bir şekilde yaşayacaklardır. Her yeni balık türü ve akvaryum için bakım ihtiyaçları farklılık gösterebilir, bu yüzden araştırma yapmak ve bakım tekniklerini sürekli geliştirmek önemlidir.
                    </p>
                </div>
            </div>

        </div>

    );
}

export default FishText;