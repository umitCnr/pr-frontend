import React, {useEffect, useState} from "react";
import resim from "../../icons/bithi.webp";
import './BitkiTextDesing.css';

const BitkiPageText = ()=>{

    const [scale, setScale] = useState(1);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });


    const handleMouseMove = (event) => {

        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const rotateX = (clientY - centerY) / height * -10;
        const rotateY = (clientX - centerX) / width * 10;

        setTilt({ rotateX, rotateY });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = 200;
            const maxScale = 200;

            if (scrollY > triggerHeight) {
                const newScale = Math.min(1 + (scrollY - triggerHeight) / 20000, maxScale / 10);
                setScale(newScale);
            } else {
                setScale(1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div>
            <div className="scroll-container-bitki">
                <div onMouseMove={handleMouseMove}
                     onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
                     style={{
                         transform: `perspective(500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                     }} className="arka-bitki">
                    <img
                        className="image-aquariumA"
                        src={resim}
                        alt="Aquarium"
                        style={{ transform: `scale(${scale})` }}
                    />
                </div>

                <div className={"bitki-text"}>
                    <p className={"bitki-p"}>Akvaryum bitkileri, sadece dekoratif bir işlev görmekle kalmaz, aynı zamanda akvaryum ekosisteminin sağlığı için hayati bir rol oynar. Akvaryum bitkileri, fotosentez yoluyla suya oksijen sağlar ve bu sayede balıklar ile diğer su canlılarının daha sağlıklı bir ortamda yaşamasına yardımcı olur. Ayrıca, bitkiler suyun doğal filtrasyonunu da destekleyerek amonyak, nitrit ve nitrat gibi zararlı maddelerin seviyelerini düşürür. Bu da balıkların daha az stres altında olmalarını ve hastalıklara karşı daha dirençli olmalarını sağlar.
                        Akvaryum bitkileri farklı tür ve özelliklere göre kategorize edilir. Su yüzeyinde yüzen yüzey bitkileri, akvaryumun üst kısmında doğal bir gölgelik oluşturur ve su yüzeyinde doğal bir hareket sağlar. Bu bitkiler ışık yoğunluğunu azaltarak suyun aşırı ısınmasını önler ve alg oluşumunu sınırlayabilir. Yüzen bitkiler, özellikle düşük ışık gereksinimi olan balık türleri için ideal bir ortam sunar.

                        Su altı bitkileri ise akvaryumun orta ve dip kısımlarında kök salarak suyun her katmanına oksijen sağlar. Bu bitkiler, akvaryum tabanına ek bir renk ve doku katar. Aynı zamanda balıklar için saklanma alanı yaratarak streslerini azaltır. Bu tür bitkiler aynı zamanda akvaryum suyunun asidik ve bazik dengesini (pH dengesini) de olumlu yönde etkileyebilir.</p>
                </div>
            </div>
        </div>
    );
}

export default BitkiPageText;