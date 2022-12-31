import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class SendButton extends Component {
  state = {};
  render() {
    return (
      <button
        id='send-btn'
        onClick={this.props.sendemailevent}
        className={`flex justify-center items-center font-poppins text-white font-semibold py-[4px] text-[25px] px-[50px] visit-btn rounded-[10px]`}
      >
        Send
      </button>
    );
  }
}

class ContactPage extends Component {
  state = {};

  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('title-section')) {
            entry.target.classList.add('show-title-section');
          } else if (entry.target.classList.contains('text-introduce')) {
            entry.target.classList.add('show-text-introduce');
          } else if (entry.target.classList.contains('design-text')) {
            entry.target.classList.add('show-design-text');
          } else if (entry.target.classList.contains('left-trans')) {
            entry.target.classList.add('show-left-trans');
          } else {
            entry.target.classList.add('show');
          }
        }
      });
    });

    const hideelement = document.querySelectorAll('.hide');
    hideelement.forEach((el) => observer.observe(el));

    const textarea = document.getElementById('message');
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }
  }

  sendemail = () => {
    const userSubject = document.getElementById('subject');
    const userEmail = document.getElementById('email');
    const userMessage = document.getElementById('message');

    emailjs
      .send(
        'service_3knx6na',
        'template_uut3h5b',
        {
          subject: userSubject.value,
          from_email: userEmail.value,
          message: userMessage.value,
        },
        'glFa2HXUrdVf7SBvi'
      )
      .then((result) => {
        if (result.text == 'OK') {
          alert('send');
        } else {
          alert(result.text);
        }
      });

    userSubject.value = '';
    userEmail.value = '';
    userMessage.value = '';
  };

  render() {
    return (
      <div className='sm:px-[40px] px-[20px] mt-[110px] sm:mt-[120px] flex justify-center items-start'>
        <div className='w-full lg:max-w-[1024px]'>
          <section className=''>
            <div className='mb-[20px] w-full flex flex-col justify-center items-center rounded-[20px] contact-menu py-[40px] sm:py-[50px] px-[25px] sm:px-[67px] hide'>
              <form
                className='w-full flex flex-col justify-start item-center'
                method='post'
              >
                <label
                  className='font-poppins font-[600] text-label text-[20px] sm:text-[30px] order1 left-trans hide'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='bg-input font-[500] text-[16px] sm:text-[28px] font-poppins text-input min-h-[30px] mb-[30px] sm:mb-[45px] rounded-[10px]'
                  name='email'
                  type='email'
                  id='email'
                  autoComplete='off'
                />
                <label
                  className='font-poppins font-[600] text-label text-[20px] sm:text-[30px] order2 left-trans hide'
                  htmlFor='subject'
                >
                  Subject
                </label>
                <input
                  className='bg-input font-[500] text-[16px] sm:text-[28px] font-poppins text-input min-h-[30px] mb-[30px] sm:mb-[45px] rounded-[10px]'
                  name='subject'
                  type='text'
                  id='subject'
                  autoComplete='off'
                />
                <label
                  className='font-poppins font-[600] text-label text-[20px] sm:text-[30px] order3 left-trans hide'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  className='bg-input font-[500] text-[16px] sm:text-[28px] font-poppins text-input mb-[60px] sm:mb-[100px] rounded-[10px]'
                  name='message'
                  id='message'
                />
              </form>

              <SendButton sendemailevent={this.sendemail} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactPage;
