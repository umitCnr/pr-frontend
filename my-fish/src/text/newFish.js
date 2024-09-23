import React, {useEffect, useState} from "react";

const WriteNew =()=>{
    const [text,setText] = useState("");

    const text_write = () =>{
        setText("Akvaryumda canlı beslemek, hem görsel bir şölen sunar hem de sakinleştirici bir hobi olabilir. Ancak, bu süreçte dikkat etmeniz gereken bazı önemli noktalar vardır. Yeni başlayanlar için temel bilgiler:\n" +
            "\n" +
            "Akvaryum Seçimi: Yeni başlayanlar için en az 20-30 litrelik bir akvaryum önerilir. Daha büyük akvaryumlar, su kalitesini korumayı daha kolay hale getirir. Cam akvaryumlar yaygın olarak tercih edilir, ancak akrilik akvaryumlar da hafif ve dayanıklıdır.\n" +
            "\n" +
            "Ekipman: Su akışını sağlamak ve suyun temizliğini korumak için bir filtre edinmelisiniz. Su sıcaklığını kontrol etmek için bir ısıtıcı kullanmalısınız. Çoğu tatlı su balığı 22-26°C arasında bir sıcaklıkta en iyi şekilde yaşar. Doğru aydınlatma, hem balıkların sağlığı hem de bitkilerin büyümesi için önemlidir. LED lambalar uzun ömürlü ve enerji tasarrufludur.\n" +
            "\n" +
            "Su Değişimi ve Kalitesi: pH, amonyak, nitrit ve nitrat seviyelerini düzenli olarak test edin. Su parametreleri, balıkların sağlığı için kritik öneme sahiptir. Haftada %10-20 oranında su değişimi yapmak, suyun kalitesini korumaya yardımcı olur.\n" +
            "\n" +
            "Balık Seçimi: Yeni başlayanlar için, barışçıl ve dayanıklı türler tercih edilmelidir. Neon tetra, guppy ve zebra danio gibi türler iyi seçeneklerdir. Yeni balıkları akvaryuma tanıtırken, öncelikle balıkları akvaryumun suyuyla tanıştırarak şok yaşamalarını önleyin.\n" +
            "\n" +
            "Beslenme: Balıklarınızı kaliteli yemlerle besleyin. Aşırı yemleme, suyun kirlenmesine ve balıkların sağlığının bozulmasına neden olabilir. Balık türlerine göre değişen farklı yemler kullanarak besin çeşitliliği sağlayın.\n" +
            "\n" +
            "Bitkiler ve Dekorasyon: Akvaryumda canlı bitkiler bulundurmak, suyun kalitesini artırır ve balıklar için doğal bir ortam yaratır. Taşlar, kayalar ve gizlenme alanları, balıklarınız için güvenli bölgeler sağlar.\n" +
            "\n" +
            "Akvaryum Bakımı: Akvaryum camlarını ve ekipmanları düzenli olarak temizleyin, ancak aşırı temizlikten kaçının. Doğal bakteri dengesinin bozulmaması önemlidir. Balıklarınızı düzenli olarak gözlemleyin. Davranışlarındaki değişiklikler, stres veya hastalık belirtisi olabilir.\n" +
            "\n" +
            "Akvaryumda canlı beslemek, sabır ve bilgi gerektiren bir süreçtir. Yukarıdaki ipuçlarını dikkate alarak, sağlıklı ve mutlu bir akvaryum ortamı yaratabilir, bu keyifli hobinin tadını çıkarabilirsiniz. Unutmayın, her akvaryum farklıdır ve zamanla öğrenmeye devam edeceksiniz!")
    }
useEffect(()=>{
    text_write();
})

return(
  <div>
      <div className={"text-div"}>
          <h1 className={"baslik"}>yeni başlayanlar için</h1>
         <p className={"text"}>{text}</p>
      </div>
  </div>
);
}

export default WriteNew;