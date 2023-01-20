<template>
    <section id="contact-us">
        <h1>Свяжитесь с нами!</h1>

        <!-- contact info -->
        <div class="container">
          <div class="contact-info">
            <div class="specific-info">
              <i class="fas fa-home"></i>
              <div>
                <p class="title">4th floor, Hi Center</p>
                <p class="subtitle">Moi Avenue</p>
              </div>
            </div>
            <div class="specific-info">
              <i class="fas fa-phone-alt"></i>
              <div>
                <a href="">+254 720 XXX XXX </a>
                <br />
                <a href="">+254 721 XXX XXX</a>

                <p class="subtitle">Mon to Fri 9am-6pm</p>
              </div>
            </div>
            <div class="specific-info">
              <i class="fas fa-envelope-open-text"></i>
              <div>
                <a href="mailto:info@alphayo.co.ke">
                  <p class="title">info@alphayo.co.ke</p>
                </a>
                <p class="subtitle">Задавайте ваши вопросы в любое время!</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <form action="" method="">
              <!-- Name -->
              <label for="name"><span>Ваше имя</span></label>
              <input type="text" id="name" name="name" value="" />

              <!-- Email -->
              <label for="email"><span>Ваш почтовый адрес</span></label>
              <input type="text" id="email" name="email" value="" />

              <!-- Subject -->
              <label for="subject"><span>Тема вопроса</span></label>
              <input type="text" id="Subject" name="subject" value="" />

              <!-- Message -->
              <label for="message"><span>Сообщение</span></label>
              <textarea id="message" name="message"></textarea>

               <!-- Button -->
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </section>
</template>