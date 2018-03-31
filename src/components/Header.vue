<template>
            <header class="header">
                <div class="header__logo">
                    <img class="header__logo--icon" src="../assets/img/k-logo.png">
                </div>
                <h1 class="header__heading">
                    <span class="header__heading--main">
                        Kieran Smith
                    </span>
                    <span class="header__heading--sub">
                        Front-End Web Developer
                    </span>
                </h1>
                <div class="header__location">
                    <i class="header__location--icon fal fa-map-marker-alt"></i>
                    <span class="header__location--name">
                        London
                    </span>
                </div>
                <div class="header__mb-only">
                    <span data-whatsapp="447468523821" class="header__whatsapp-link">
                        Message me on WhatsApp
                        <i class="fab fa-whatsapp"></i>
                    </span>
                </div>
                <div class="scroll">
                    <a href="#projects">
                        <i class="scroll__icon fal fa-angle-down"></i>
                    </a>
                </div>
            </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      heading: "Kieran Smith",
      jobTitle: "Front-End Web Developer"
    };
  }
};
</script>

