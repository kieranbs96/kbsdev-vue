<template>
  <div>
            <footer>
                <div class="footer-area">
                    <div class="footer-area__logo">
                        <img class="footer-area__logo--img" src="../assets/img/k-logo.png">
                    </div>
                    <div class="footer-area__contact">
                        <a href="mailto:kieranbs96@gmail.com" class="footer-area__contact--mail-link">
                            <span class="say-hi">Say hi</span>
                            <i class="fal fa-hand-peace"></i>
                        </a>
                    </div>
                    <div class="footer-area__links">
                        <div class="footer-area__links--twitter">
                            <a target="_blank" href="//twitter.com/kbsdev" class="twitter__link">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="footer-area__links--whatsapp">
                            <a target="_blank" data-whatsapp="447468523821" class="whatsapp__link ">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div class="footer-area__links--linkedin">
                            <a target="_blank" href="//linkedin.com/in/kieranbs96" class="linkedin-in__link">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div class="footer-area__links--github">
                            <a target="_blank" href="//github.com/kieranbs96" class="github__link">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div class="footer-area__links--codepen">
                            <a target="_blank" href="//codepen.io/kieranbs96/" class="codepen__link">
                                <i class="fab fa-codepen"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="subFooter">
                <p class="subFooter__message">
                    Created with
                    <span class="subFooter__message-heart">&hearts;</span> by Kieran
                </p>
            </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
