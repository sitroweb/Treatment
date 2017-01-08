@include('style.header')
<body>

<!--Start Preloader-->

<div id="preloader" class="pre3">

    <div class="preloader-container">

        <!--<h4 class="preload-logo">Matashi</h4>

            <h4 class="back-logo">Matashi</h4>-->

        <img src="{{cdn('images/logo.png')}}" class="preload-logo1" alt=""><br><br><br>

        <img src="{{cdn('images/Preloader_2.gif')}}" alt="" class="preload-gif">

    </div>

</div>

<!--End Preloader-->

<!-- Container -->

{{--    @include('style.nav')--}}
    @yield('content')
    <!-- Footer -->
{{--    <!--@include('style.bottom')-->--}}
    <!-- Footer -->
    <!-- Footer -->
{{--    @include('style.footer-nav')--}}
    <!-- Footer -->

<!-- Container -->
@include('style.footer')
@include('style.js')
@yield('FooterScripts')

</body>

</html>