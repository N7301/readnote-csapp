/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a07416463035408f81dfb1c460cf4623"
  },
  {
    "url": "assets/css/0.styles.c311bc3a.css",
    "revision": "90794faab6f6e45791c5c13247775be5"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/2021-07-16-23-11-17.0c6f04f9.png",
    "revision": "0c6f04f975afec6187a14d476dcda40f"
  },
  {
    "url": "assets/img/2021-07-18-08-15-08.fd389b98.png",
    "revision": "fd389b981ef79f22d24215ecc5db3a08"
  },
  {
    "url": "assets/img/2021-07-18-08-23-21.d7d4cac8.png",
    "revision": "d7d4cac8e28e2fdc268f8ab5d7fcb8f9"
  },
  {
    "url": "assets/img/2021-07-18-08-28-07.aa1791cd.png",
    "revision": "aa1791cdd8b01472d7da51562c5f5357"
  },
  {
    "url": "assets/img/2021-07-18-08-29-41.13120361.png",
    "revision": "13120361e46c62691a3309d3f5cffe3c"
  },
  {
    "url": "assets/img/2021-07-18-09-07-31.0804f1ea.png",
    "revision": "0804f1ea463c9a5856eff9fd0dea99d4"
  },
  {
    "url": "assets/img/2021-07-18-09-19-50.f4f7e5f6.png",
    "revision": "f4f7e5f6334646c587ea2c7aa4903ae7"
  },
  {
    "url": "assets/img/2021-07-18-09-25-53.3574445a.png",
    "revision": "3574445a48732f2c4720269b74333eb7"
  },
  {
    "url": "assets/img/2021-07-18-09-27-37.dd61418e.png",
    "revision": "dd61418eecaf85d2c2256be5054ec2a5"
  },
  {
    "url": "assets/img/2021-07-18-09-28-45.e197ff4a.png",
    "revision": "e197ff4ae6b783875e515d88793f0313"
  },
  {
    "url": "assets/img/2021-07-18-09-29-37.4d296c27.png",
    "revision": "4d296c279cd0813529519ec0ddf296ee"
  },
  {
    "url": "assets/img/2021-07-18-09-29-59.ed1eaf40.png",
    "revision": "ed1eaf4082530603f79b8009c8c4d655"
  },
  {
    "url": "assets/img/2021-07-20-09-00-34.d88de541.png",
    "revision": "d88de541c01c521998b6fc41c56df472"
  },
  {
    "url": "assets/img/2021-07-20-10-05-57.d262516e.png",
    "revision": "d262516ee13d2135d24283fec4d5c075"
  },
  {
    "url": "assets/img/2021-07-20-10-14-47.ba76a2fb.png",
    "revision": "ba76a2fb2e52b5a0d3181cebb6eda96c"
  },
  {
    "url": "assets/img/2021-07-20-10-33-10.4f69746c.png",
    "revision": "4f69746c63afebc401162a941034d1cc"
  },
  {
    "url": "assets/img/2021-07-20-10-40-43.ce6f9aaf.png",
    "revision": "ce6f9aaf867f4dbbed0c644fe398f44a"
  },
  {
    "url": "assets/img/2021-07-20-10-54-34.8defeb7e.png",
    "revision": "8defeb7ecf6c92addf361f84a3614a8e"
  },
  {
    "url": "assets/img/2021-07-20-10-55-32.009b6a62.png",
    "revision": "009b6a62c1a6d3ca958a45f7fd01bc84"
  },
  {
    "url": "assets/img/2021-07-20-11-06-37.7957f7dc.png",
    "revision": "7957f7dc6be423d2aa72686796c12afd"
  },
  {
    "url": "assets/img/2021-07-20-11-09-33.a0f3be3f.png",
    "revision": "a0f3be3f27e11ed3d775c7127a77ae0e"
  },
  {
    "url": "assets/img/2021-07-20-11-14-59.e60f6ef6.png",
    "revision": "e60f6ef622d29ad20c436642b0c72361"
  },
  {
    "url": "assets/img/2021-07-20-12-59-03.9be11bb6.png",
    "revision": "9be11bb69e034ca9c3c9f3f0b4b5bb07"
  },
  {
    "url": "assets/img/2021-07-20-13-53-23.fd562c31.png",
    "revision": "fd562c31ba643886a556080df379f776"
  },
  {
    "url": "assets/img/2021-07-20-14-19-37.e1d0f3aa.png",
    "revision": "e1d0f3aa4e0c459f23112f6145d7d4d9"
  },
  {
    "url": "assets/img/2021-07-20-14-26-42.593c25a5.png",
    "revision": "593c25a559945fabdb22776566fb043a"
  },
  {
    "url": "assets/img/2021-07-20-14-50-12.bf1601fd.png",
    "revision": "bf1601fd3e3fd8ed08d5423ca3717c6c"
  },
  {
    "url": "assets/img/2021-07-20-15-07-42.df8470da.png",
    "revision": "df8470da7eaf7089e9c139c9520b898c"
  },
  {
    "url": "assets/img/2021-07-20-15-23-59.fa284166.png",
    "revision": "fa284166a5b6961a34afb95d75b97bf0"
  },
  {
    "url": "assets/img/2021-07-20-15-27-16.f5327860.png",
    "revision": "f53278601de016494aa3a5e6931fae2a"
  },
  {
    "url": "assets/img/2021-07-20-15-44-22.0af19a36.png",
    "revision": "0af19a36a7aa5ce7e91db6848787ea8e"
  },
  {
    "url": "assets/img/2021-07-20-15-49-36.e0c19d03.png",
    "revision": "e0c19d0396a898d4c5ca068e91af413a"
  },
  {
    "url": "assets/img/2021-07-20-15-55-44.798d29af.png",
    "revision": "798d29af3c31dd22cb48c54d04d8cebc"
  },
  {
    "url": "assets/img/2021-07-20-15-56-38.9b36e6e2.png",
    "revision": "9b36e6e2865a2dfcc283adda433c4a54"
  },
  {
    "url": "assets/img/2021-07-20-15-56-50.fb288294.png",
    "revision": "fb28829401eeab8d0e32cfacd4e5d006"
  },
  {
    "url": "assets/img/2021-07-20-16-04-16.e7bfa289.png",
    "revision": "e7bfa2893036704fbced7db362680cbb"
  },
  {
    "url": "assets/img/2021-07-20-16-14-29.d64a986f.png",
    "revision": "d64a986f42fc9e69b459241832035c09"
  },
  {
    "url": "assets/img/2021-07-20-16-16-09.9e5b1ea0.png",
    "revision": "9e5b1ea05a101f6061f27d2385a911e9"
  },
  {
    "url": "assets/img/2021-07-20-16-16-58.cb251b63.png",
    "revision": "cb251b633575d68a03afeeea5c51f038"
  },
  {
    "url": "assets/img/2021-07-20-17-19-19.b9b64aba.png",
    "revision": "b9b64abaa34429cf805e3f5558958974"
  },
  {
    "url": "assets/img/2021-07-20-18-46-48.4ab63604.png",
    "revision": "4ab63604e1511e8575b6d64fdda9d141"
  },
  {
    "url": "assets/img/2021-07-20-18-55-20.dd12941b.png",
    "revision": "dd12941be80393363fc55550ea1028cc"
  },
  {
    "url": "assets/img/2021-07-20-18-56-38.a4f7ab5c.png",
    "revision": "a4f7ab5c29b829de2e251e0bc829eec2"
  },
  {
    "url": "assets/img/2021-07-20-18-59-36.8604bac6.png",
    "revision": "8604bac6a5fb491d18fa9b44cea37bc9"
  },
  {
    "url": "assets/img/2021-07-20-19-03-25.0912cf3b.png",
    "revision": "0912cf3b61f6b56de16e802966e50228"
  },
  {
    "url": "assets/img/2021-07-20-19-03-52.6883b33f.png",
    "revision": "6883b33f4d8e525c23cffb1eaf86d51e"
  },
  {
    "url": "assets/img/2021-07-20-19-30-43.88da52b1.png",
    "revision": "88da52b195d658be6aa370bb22d62332"
  },
  {
    "url": "assets/img/2021-07-20-19-45-24.7b04eb9b.png",
    "revision": "7b04eb9b92b02d97da88d9b253593262"
  },
  {
    "url": "assets/img/2021-07-20-20-46-29.fe07e533.png",
    "revision": "fe07e5333a6268d1d0f6dc3be09f82b8"
  },
  {
    "url": "assets/img/2021-07-20-20-52-19.7a863ac9.png",
    "revision": "7a863ac9d16701dd7cab8eba3763038c"
  },
  {
    "url": "assets/img/2021-07-20-21-03-47.b60eee09.png",
    "revision": "b60eee092446d08d321919d0151b1eff"
  },
  {
    "url": "assets/img/2021-07-24-12-37-50.d757f826.png",
    "revision": "d757f826749d63c0c16b6fbc99b62d9d"
  },
  {
    "url": "assets/img/2021-07-24-12-42-33.38385823.png",
    "revision": "38385823a417bbc1e86b80f97a736ca7"
  },
  {
    "url": "assets/img/2021-07-24-12-47-47.47b11b10.png",
    "revision": "47b11b10a79f1a5ea42cb869d5a82e43"
  },
  {
    "url": "assets/img/2021-07-24-12-51-26.93531bc0.png",
    "revision": "93531bc075c96ddea0ee0388c9f57e97"
  },
  {
    "url": "assets/img/2021-07-24-13-06-43.975b990a.png",
    "revision": "975b990a021a4e5b825ebc900ea1a624"
  },
  {
    "url": "assets/img/2021-07-24-13-07-37.0693dc56.png",
    "revision": "0693dc5645a41e68f82e2899e6071377"
  },
  {
    "url": "assets/img/2021-07-24-13-08-24.1b6db246.png",
    "revision": "1b6db246de3c8022a0514c04d99bef6f"
  },
  {
    "url": "assets/img/2021-07-24-13-08-36.be8220a4.png",
    "revision": "be8220a46a31ee4a9484eda023b70f7a"
  },
  {
    "url": "assets/img/2021-07-24-13-08-54.778a7faa.png",
    "revision": "778a7faa51e46389a8958d9444fa7746"
  },
  {
    "url": "assets/img/2021-07-24-13-10-12.04e1e998.png",
    "revision": "04e1e99887d08c4501c97c158c43d40c"
  },
  {
    "url": "assets/img/2021-07-24-13-10-48.e2f3651c.png",
    "revision": "e2f3651c51a4fd5fbcd1c24bbad815ad"
  },
  {
    "url": "assets/img/2021-07-24-13-11-14.62210e13.png",
    "revision": "62210e130d308ac8f9b52b8b9972f25c"
  },
  {
    "url": "assets/img/2021-07-24-13-13-37.177a2baf.png",
    "revision": "177a2baf507289086f9cace54812b4aa"
  },
  {
    "url": "assets/img/2021-07-24-13-17-08.785e7b16.png",
    "revision": "785e7b16b13308b19a516867d2e7a41f"
  },
  {
    "url": "assets/img/2021-07-24-13-18-11.ab200f80.png",
    "revision": "ab200f805836d0e10b9c35e7acf15409"
  },
  {
    "url": "assets/img/2021-07-24-13-52-58.5f784284.png",
    "revision": "5f7842842bb7ed28ffb12ef8fdc4c867"
  },
  {
    "url": "assets/img/2021-07-24-14-45-05.f7cc4a70.png",
    "revision": "f7cc4a70064a55aa5fe81fda91c7ce36"
  },
  {
    "url": "assets/img/2021-07-24-14-54-12.32c3e21d.png",
    "revision": "32c3e21db24f6ffd4a86a9d4a8361fa9"
  },
  {
    "url": "assets/img/2021-07-24-14-59-05.c869527d.png",
    "revision": "c869527dbceef4b9efab11133c195b2c"
  },
  {
    "url": "assets/img/2021-07-24-15-07-25.90b86ac1.png",
    "revision": "90b86ac1440eeb5b045eb6b51d05b9aa"
  },
  {
    "url": "assets/img/2021-07-24-15-11-31.c0c03c97.png",
    "revision": "c0c03c978612467daf0b2910a753ffbb"
  },
  {
    "url": "assets/img/2021-07-24-15-19-56.86942483.png",
    "revision": "86942483341dbd123aad6d7e68622909"
  },
  {
    "url": "assets/img/2021-07-24-15-37-51.779a602a.png",
    "revision": "779a602ad3ae8eddb072a21a2bcfd12b"
  },
  {
    "url": "assets/img/2021-07-24-15-38-21.faa93693.png",
    "revision": "faa936938f671ab4f6d34988bf459a45"
  },
  {
    "url": "assets/img/2021-07-24-15-39-35.d77fad58.png",
    "revision": "d77fad58d4937c0b2dbcb881ca2804d3"
  },
  {
    "url": "assets/img/2021-07-24-15-47-19.e5c3ff12.png",
    "revision": "e5c3ff12dffa1423437064829bd36df6"
  },
  {
    "url": "assets/img/2021-07-24-15-53-22.97fe8f54.png",
    "revision": "97fe8f54bad2e219e2e51859939a16ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.4693486a.js",
    "revision": "67ff9cdd7cc74ccad51d7dd04d80b645"
  },
  {
    "url": "assets/js/11.59f72fd1.js",
    "revision": "8e5b6af5516d339b2b7e963484f27d41"
  },
  {
    "url": "assets/js/12.d5edb40a.js",
    "revision": "e250a2d92bf3bac6b31c2c3bd55535b4"
  },
  {
    "url": "assets/js/13.02726862.js",
    "revision": "a750f9886231145beab5791ad393023b"
  },
  {
    "url": "assets/js/14.c8096bd1.js",
    "revision": "a359b1236b78173c4ec7c57c02336b78"
  },
  {
    "url": "assets/js/15.e452a2c9.js",
    "revision": "c49709d0d495996386a2372b4df63edf"
  },
  {
    "url": "assets/js/16.6cb1a3b3.js",
    "revision": "bff071625b8c4d197623fb8aa8a4e84c"
  },
  {
    "url": "assets/js/17.fb5e6b3e.js",
    "revision": "963cb485cb148ce7cb9383fa9cdc8719"
  },
  {
    "url": "assets/js/2.5378a777.js",
    "revision": "fa5b03d39585825ca5dc68f000786efd"
  },
  {
    "url": "assets/js/3.481f0a27.js",
    "revision": "775b7c7b2276dd97528a894a49c62476"
  },
  {
    "url": "assets/js/4.4f65e8d5.js",
    "revision": "a6dae223ccaac45fa242d979191f3faf"
  },
  {
    "url": "assets/js/5.b8d86579.js",
    "revision": "24b2347faf26ee3fead2d254acf9f9f9"
  },
  {
    "url": "assets/js/6.a4f281fe.js",
    "revision": "38ba6879abe6334f674040b84f2688c5"
  },
  {
    "url": "assets/js/7.70d75647.js",
    "revision": "d4b9612c6c7d983d4f0b3773cf5d8078"
  },
  {
    "url": "assets/js/8.4a4b9e83.js",
    "revision": "fac24d77f8bb1e7caf07762d0304e35a"
  },
  {
    "url": "assets/js/9.b7c59599.js",
    "revision": "35986bf28d0a9c5b8956501c34acfb33"
  },
  {
    "url": "assets/js/app.f9a05dae.js",
    "revision": "78fac6bd777d7c8510b110a86dc6dd76"
  },
  {
    "url": "csapp.jpg",
    "revision": "3d0c9e6a86ac7c0a286551c9ade57f63"
  },
  {
    "url": "guide/test.html",
    "revision": "dc07d7378490f48d7e88654b44f0846f"
  },
  {
    "url": "index.html",
    "revision": "eba2087a58563c3d950a73084dfefa53"
  },
  {
    "url": "note/ch2/index.html",
    "revision": "09418a264955a46386432789911e83c6"
  },
  {
    "url": "note/ch3/assembly-basic.html",
    "revision": "f6d690a039c99ab6b49e496167c2ada3"
  },
  {
    "url": "note/ch3/control.html",
    "revision": "ebefc270634448f44120d7499f2521be"
  },
  {
    "url": "note/ch3/data.html",
    "revision": "5e3ec387981fba7d6e657bf44a53c69a"
  },
  {
    "url": "note/ch3/index.html",
    "revision": "a0af5c6fb1f19ed5bae3469e4229e611"
  },
  {
    "url": "note/ch3/procedures.html",
    "revision": "29bf7e1db32896bea92166279d43a312"
  },
  {
    "url": "note/ch4/index.html",
    "revision": "68ac83bb84600584117424d3450e1a00"
  },
  {
    "url": "note/ch4/logic-design.html",
    "revision": "6728e5ac5f65ae098912d5fb4bf621c9"
  },
  {
    "url": "note/ch4/Y86-64-ISA.html",
    "revision": "5a6ee81e0f53a20cf2924047e3c918d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
