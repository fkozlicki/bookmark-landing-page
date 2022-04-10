// MOBILE MENU

$(".navbar__menu-btn").on("click", () => {
	$("body").css("overflow", "hidden");
	$(".navbar__content").addClass("navbar__content--active");
	$(".navbar__mobile-menu").addClass("navbar__mobile-menu--active");
});

$(".navbar__mobile-menu-btn").on("click", () => {
	$("body").removeAttr("style");
	$(".navbar__content").removeClass("navbar__content--active");
	$(".navbar__mobile-menu").removeClass("navbar__mobile-menu--active");
});

// DYNAMIC FEATURES

const features = [
	{
		title: "Simple Bookmarking",
		subtitle: "Bookmark in one click",
		description:
			"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
	},
	{
		title: "Speedy Searching",
		subtitle: "Intelligent search",
		description:
			"Our powerful search will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
	},
	{
		title: "Easy Sharing",
		subtitle: "Share your bookmarks",
		description:
			"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
	},
];

$(".features__menu-item").each(function () {
	$(this).on("click", () => {
		$(".features__menu-item").each(function () {
			$(this).removeClass("features__menu-item--active");
		});
		$(this).addClass("features__menu-item--active");

		features.map((feature) => {
			if ($(".features__menu-item--active").text().includes(feature.title)) {
				$(".features__content-title").text(feature.subtitle);
				$(".features__content-description").text(feature.description);
			}
		});
	});
});

// accordion

$(".faq__accordion-header").each(function () {
	$(this).on("click", () => {
		$(".faq__accordion-content").each(function () {
			$(this).removeClass("faq__accordion-content--active");
		});
		$(".faq__accordion-btn").each(function () {
			$(this).removeClass("faq__accordion-btn--active");
		});
		$(this)
			.parent()
			.find(".faq__accordion-content")
			.addClass("faq__accordion-content--active");

		$(this)
			.parent()
			.find(".faq__accordion-btn")
			.addClass("faq__accordion-btn--active");
	});
});

// EMAIL VALIDATION

const isEmail = (email) => {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
};

console.log(isEmail("masno@gmail.compl"));

$(".newsletter__form").on("submit", function (e) {
	e.preventDefault();

	if (!isEmail($(".newsletter__email").val())) {
		$(".newsletter__error-message").addClass(
			"newsletter__error-message--active"
		);
		$(".newsletter__image-box").addClass("newsletter__image-box--active");
	} else {
		$(".newsletter__error-message").removeClass(
			"newsletter__error-message--active"
		);
		$(".newsletter__image-box").removeClass("newsletter__image-box--active");
	}

	$(".newsletter__email").val("");
});
