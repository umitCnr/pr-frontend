import React, {useEffect, useState} from "react";
import resim from "../../icons/mercan1.png";
import './OmurgasizTexrDesing.css';

const OmurgasizPageText = ()=>{

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

        const rotateX = (clientY - centerY) / height * -10;
        const rotateY = (clientX - centerX) / width * 10;

        setTilt({ rotateX, rotateY });
    };

    return(
        <div>
            <div  className="scroll-container-omurgasiz">
                <div onMouseMove={handleMouseMove}
                     onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
                     style={{
                         transform: `perspective(500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                     }} className="arka-omurgasiz">
                    <img
                        className="image-aquarium"
                        src={resim}
                        alt="Aquarium"
                        style={{ transform: `scale(${scale})` }}
                    />
                </div>

                <div className={"omurgasiz-text"}>
                    <p className={"omurgasiz-p"}>
                        Omurgasız akvaryum canlıları, iskeletleri olmayan, yani omurga veya kemikleri bulunmayan organizmalardır. Genellikle deniz ve tatlı su akvaryumlarında yaygın olarak bulunurlar. Omurgasızlar, deniz ekosistemlerinde önemli roller üstlenir ve akvaryum sahipleri için ilginç ve estetik açıdan hoş canlılar olabilirler. İşte omurgasız akvaryum canlıları hakkında bazı bilgiler: 1. Deniz Yıldızları (Starfish): Deniz yıldızları, genellikle beş kollu ve yumuşak, sert dış yüzeyleri olan deniz omurgasızlarıdır. Çeşitli renklerde olabilirler (mavi, kırmızı, sarı, vb.). Akvaryumlarda bakım yapılırken dikkat edilmesi gereken unsurlar arasında suyun temizliği ve tuzluluğu bulunur. Ayrıca, bazı türler akvaryumda sadece canlı mercanlarla beslenebilir. 2. Deniz Tarağı (Clams): Deniz tarağı, iki kabuklu yumuşakçaların bir türüdür. Kabukları genellikle simetrik ve büyüklükleri çeşitlilik gösterir. Su kalitesine duyarlı olan bu canlılar, özellikle suyun nitrik seviyeleri bakımından dikkatli olunması gereken bir türdür. 3. Mercanlar (Corals): Mercanlar, koloniler halinde yaşayan poliplerden oluşur ve çoğu zaman sert dış yüzeylere sahiptir. Renkli ve estetik görünümleriyle bilinen mercanlar, akvaryumda yaşayan diğer canlılar için de önemli bir yaşam alanı sunar. Mercanların sağlıklı büyüyebilmesi için özel aydınlatma ve suyun kimyasal dengesi gereklidir.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OmurgasizPageText;