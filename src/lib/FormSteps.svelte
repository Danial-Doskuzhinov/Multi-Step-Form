<!-- <script>
import BgSideBar from './img/bg-sidebar-desktop.svg';
import BgSideBarMobile from './img/bg-sidebar-mobile.svg'
  </script>
  
  <nav class="form-steps">
    <picture>
      <source media="(min-width:768px)" srcset={BgSideBar}>
      <img src={BgSideBarMobile} alt="" srcset="">
    </picture>
    <div >o</div>
    <ol>
      <li class="form-step"  ><span class="mobile-hidden"><span class="Steps">Step 1</span><br> Your info</span></li>
      <li class="form-step"  ><span class="mobile-hidden"><span class="Steps">Step 2</span><br> Select plan</span></li>
      <li class="form-step" ><span class="mobile-hidden"><span class="Steps">Step 3</span><br> Add-ons</span></li>
      <li class="form-step" ><span class="mobile-hidden"><span class="Steps">Step 4</span><br> Summary</span></li>
    </ol>
  </nav>
-->
  
  <script>
    import BgSideBar from './img/bg-sidebar-desktop.svg';
import BgSideBarMobile from './img/bg-sidebar-mobile.svg';
    let currentStep = 0;
  
   
  </script>
  

  <div class="all">
    <picture>
      <source media="(min-width:768px)" srcset={BgSideBar}>
      <img src={BgSideBarMobile} alt="" srcset="">
    </picture>
  <div class="steps">

    <div class="step {currentStep === 1 ? 'active' : ''}" >
      <div class="number">1</div>
      <span class="mobile-hidden"><span class="Steps">Step 1</span><br> Your info</span>
    </div>
    <div class="step {currentStep === 2 ? 'active' : ''}" >
      <div class="number">2</div>
      <span class="mobile-hidden"><span class="Steps">Step 2</span><br> Select plan</span>
    </div>
    <div class="step {currentStep === 3 ? 'active' : ''}" >
      <div class="number">3</div>
      <span class="mobile-hidden"><span class="Steps">Step 3</span><br> Add-ons</span>
    </div>
    <div class="step {currentStep === 4 ? 'active' : ''}">
      <div class="number">4</div>
      <span class="mobile-hidden"><span class="Steps">Step 4</span><br> Summary</span>
    </div>
  </div>
</div>
  <style>
    .all{
      margin-top: 1rem;
      margin-right: 7rem;
    }
    .steps {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 150px;
      left: 23%;
      width: 200px;
      padding: 20px;
      border-radius: 10px;
    }
    
    .step {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      cursor: pointer;
      color: white;
    }
  
    .step .number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #556ee6;
      margin-right: 10px;
    }
  
    .step.active .number {
      background-color: #a3d0fe;
    }
  
    .step.active {
      color: #a3d0fe;
    }
    .form-steps {
      position: relative;
      margin: 16px;
      margin-right: 100px;
    }
    .form-steps > ol {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    .form-step {
      color: rgb(255, 255, 255);
      font-family: 'Ubuntu', sans-serif;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: left;
      text-transform: uppercase;
      cursor: pointer;
    }
    .Steps {
      color: rgb(171, 188, 255);
      font-family: 'Ubuntu', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0px;
      text-align: left;
    }
  </style>