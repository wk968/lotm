/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function($) {
	let currentQuestion = 0,currentLanguage = 'zh', scores = {};

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article'),
		$langButtons = $('.lang-btn'),
		$lang = $('.lang-btn.active'),
		$startScreen = $('.start-screen'),
		$quizScreen = $('.quiz-screen'),
		$bgm = $('#bgm'),
		$startBtn = $('.start-btn'),
		$optionsList=$('#options-container');
	
		const languageData = {
			en: {
			  pageTitle: "Beyonder Pathways - Sequence Quiz",
			},
			zh: {
			  pageTitle: "诡秘之路 - 序列测验",
			}
		  };

		const pathMap = {
		zh: paths_zh,
		en: paths_en
		};

		function initScores() {
			scores = {};
			pathMap[currentLanguage].forEach(path => {
			  scores[path] = 0;
			});
		}

		function showQuestion() {
			const questions = getQuestionsByLanguage(currentLanguage);
    
			// Check if questions exist
			if (!questions || questions.length === 0) {
				console.error('No questions found for language:', currentLanguage);
				return;
			}

			if (currentQuestion >= questions.length) {
				currentQuestion = 0; // Reset to first question if out of bounds
			}

			const question = questions[currentQuestion];
			$('#question-text').text(question.text);
			$optionsList.empty(); 
			
			question.options.forEach((option) => {
				$('<button>')
					.addClass('option-btn')
					.attr('data-lang', currentLanguage) 
					.text(option.text)
					.on('click', () => selectOption(option))
					.appendTo($optionsList);
			});
			
			$('.progress').css('width', `${(currentQuestion / getQuestionsByLanguage($lang).length) * 100}%`);
			adjustButtonSizes();
		}
		
		function selectOption(option) {
			const currentPaths = pathMap[currentLanguage];
  
			option.paths.forEach(path => {
				if (currentPaths.includes(path)) {
				scores[path] = (scores[path] || 0) + (option.score || 1);
				}
			});

			currentQuestion++;
			const questions = getQuestionsByLanguage(currentLanguage);
			
			if (currentQuestion < questions.length) {
				showQuestion();
			} else {
				showResult();
			}
		}
		
		function showResult() {
			let maxScore = -1;
  			let resultPath = '';
  
			pathMap[currentLanguage].forEach(path => {
				if (scores[path] > maxScore) {
				  maxScore = scores[path];
				  resultPath = path;
				}
			  });

			const result = pathInfo[resultPath];
			
			let container = $('#result-container[data-lang="' + currentLanguage + '"]');
			container.find('#result-path').text(result.name);
			$('#result-logo').attr('src', result.image); 
			container.find('#result-desc').text(result.description);
			container.find('#result-rep').text(result.representative); 

			// Display the result
			
			$('#quiz-screen').hide();
			$('#result-screen').show();
			// Add retry button handler
			$('.retry-btn').on('click', function() {
				currentQuestion = 0;
				initScores();
				$('#result-screen').hide();
				$('#quiz-screen').show();
				showQuestion();
			});
		}
		
		function getQuestionsByLanguage(language) {
			switch (language) {
				case 'zh':
					return questions_zh;
				case 'en':
					return questions_en;
				default:
					return questions_zh;
			}
		}

		function adjustButtonSizes() {
			const buttons = document.querySelectorAll('.option-btn');
			let maxHeight = 0;
			
			// First pass - calculate natural sizes
			buttons.forEach(btn => {
			  // Reset to natural state for measurement
			  btn.style.width = 'auto';
			  btn.style.height = 'auto';
			  btn.style.whiteSpace = 'nowrap';
			  
			  // Measure content dimensions
			  const contentWidth = btn.scrollWidth;
			  const contentHeight = btn.scrollHeight;
			  const containerWidth = btn.parentElement.clientWidth;
			  
			  // Store measurements as data attributes
			  btn.dataset.naturalWidth = contentWidth;
			  btn.dataset.naturalHeight = contentHeight;
			  
			  // Track maximum height (for consistent button sizing)
			  maxHeight = Math.max(maxHeight, contentHeight);
			});
			
			// Second pass - apply final sizing
			buttons.forEach(btn => {
			  const containerWidth = btn.parentElement.clientWidth;
			  const naturalWidth = parseInt(btn.dataset.naturalWidth);
			  const naturalHeight = parseInt(btn.dataset.naturalHeight);
			  
			  // Width adjustment logic
			  if (naturalWidth > containerWidth * 0.9) {
				btn.style.width = '100%';
				btn.style.whiteSpace = 'normal';
			  } else {
				btn.style.width = `${naturalWidth + 48}px`; // Content width + padding
				btn.style.whiteSpace = 'nowrap';
			  }
			  
			  // Height adjustment logic
			  if (btn.style.whiteSpace === 'normal') {
				// For wrapped text, use natural height + padding
				btn.style.height = 'auto';
				btn.style.minHeight = `${maxHeight + 24}px`; // Ensure consistent minimum height
			  } else {
				// For single-line buttons, use consistent height
				btn.style.height = `${maxHeight + 24}px`;
			  }
			  
			  // Add smooth transition
			  btn.style.transition = 'all 0.3s ease';
			});
		  }

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

			};

			$main._hide = function(addState) {

			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});
		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});
			}
		
			
			$langButtons.on("click", function() {
				$langButtons.removeClass('active');
				$(this).addClass('active');
				
				const lang = $(this).data('lang');
				currentLanguage = lang;
				document.title = languageData[lang].pageTitle;
				$('[data-lang]:not(#language-switcher [data-lang])').hide();
				$('[data-lang="' + lang + '"]').not('.lang-btn').show();
				
				currentQuestion = 0;
				initScores(); 
				showQuestion();
				setTimeout(adjustButtonSizes(), 50);
				localStorage.setItem('preferredLang', lang);
				
			});

			$startBtn.on('click', function() {
				$startScreen.hide();
				$quizScreen.removeClass('hidden').show(); 
				$bgm[0].volume = 0.2; 
				$bgm[0].play();
				initScores();
				showQuestion();
				setTimeout(adjustButtonSizes(), 50);
			});

		// Initialize.
		// Show default language (Chinese)
		const defaultLang = localStorage.getItem('preferredLang') || 'cn';
		currentLanguage = defaultLang;
		$('[data-lang="' + defaultLang + '"]').not('.lang-btn').show();
		document.title = languageData[defaultLang].pageTitle;
		$langButtons.filter('[data-lang="' + defaultLang + '"]').trigger("click");
		$('#quiz-screen').hide();	
		$('#result-screen').hide();

})(jQuery);

