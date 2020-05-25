import React, { useState, useRef, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import { gsap, Power3, Bounce, Back } from "gsap";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tortor maximus turpis ultrices feugiat. Etiam condimentum vulputate ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae finibus augue. Vestibulum volutpat, est ut fringilla vehicula, nisi nisl dignissim elit, id lacinia eros dui quis mi. Ut tempor tincidunt condimentum. Quisque at iaculis nisl, nec efficitur dolor. Integer auctor ipsum eu ipsum blandit egestas. Praesent vel vehicula orci. Nam interdum gravida odio aliquet tempor. Morbi at lorem vitae ante aliquam molestie. Duis dignissim finibus ultrices. Phasellus eu congue ante. Sed vulputate semper urna, et pulvinar massa gravida eu. In eu euismod lacus. Suspendisse in felis sed ipsum lobortis dapibus vel eu neque. Vestibulum ornare aliquet nunc et pharetra. Integer suscipit eros facilisis iaculis hendrerit. Donec sodales sagittis lorem in laoreet. Donec nec venenatis nisi, a malesuada tellus. Proin sed pellentesque neque, quis ultricies felis. Proin sit amet ultricies ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec cursus elit. Mauris sollicitudin lobortis bibendum. In hac habitasse platea dictumst. In auctor urna a arcu ullamcorper vulputate. Nunc condimentum aliquet magna, tincidunt ultricies urna congue sed. Proin rutrum massa dolor, vel dignissim tellus hendrerit eget. Nulla finibus mi vel velit volutpat luctus. Curabitur elit mauris, posuere et consequat in, vulputate eget erat. Quisque aliquam nisi ullamcorper, tincidunt sapien vitae, rhoncus risus. Morbi vitae semper felis. Etiam pharetra iaculis rutrum. Maecenas vehicula congue sapien, ut cursus ex aliquam in. Nullam dui turpis, lobortis nec lobortis et, feugiat non velit. Duis consectetur fermentum diam, nec lacinia metus. Proin id neque pharetra sapien tincidunt consectetur. In nunc leo, aliquet sed erat et, accumsan finibus enim. Praesent iaculis feugiat lacus a volutpat. Donec et nunc quam. Morbi in turpis a orci feugiat malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae elit neque. Sed in quam at nunc scelerisque cursus. Pellentesque maximus laoreet magna vel convallis. Nullam nec mattis odio. Sed sagittis nisi a nunc ullamcorper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tortor maximus turpis ultrices feugiat. Etiam condimentum vulputate ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae finibus augue. Vestibulum volutpat, est ut fringilla vehicula, nisi nisl dignissim elit, id lacinia eros dui quis mi. Ut tempor tincidunt condimentum. Quisque at iaculis nisl, nec efficitur dolor. Integer auctor ipsum eu ipsum blandit egestas. Praesent vel vehicula orci. Nam interdum gravida odio aliquet tempor. Morbi at lorem vitae ante aliquam molestie. Duis dignissim finibus ultrices. Phasellus eu congue ante. Sed vulputate semper urna, et pulvinar massa gravida eu. In eu euismod lacus. Suspendisse in felis sed ipsum lobortis dapibus vel eu neque. Vestibulum ornare aliquet nunc et pharetra. Integer suscipit eros facilisis iaculis hendrerit. Donec sodales sagittis lorem in laoreet. Donec nec venenatis nisi, a malesuada tellus. Proin sed pellentesque neque, quis ultricies felis. Proin sit amet ultricies ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec cursus elit. Mauris sollicitudin lobortis bibendum. In hac habitasse platea dictumst. In auctor urna a arcu ullamcorper vulputate. Nunc condimentum aliquet magna, tincidunt ultricies urna congue sed. Proin rutrum massa dolor, vel dignissim tellus hendrerit eget. Nulla finibus mi vel velit volutpat luctus. Curabitur elit mauris, posuere et consequat in, vulputate eget erat. Quisque aliquam nisi ullamcorper, tincidunt sapien vitae, rhoncus risus. Morbi vitae semper felis. Etiam pharetra iaculis rutrum. Maecenas vehicula congue sapien, ut cursus ex aliquam in. Nullam dui turpis, lobortis nec lobortis et, feugiat non velit. Duis consectetur fermentum diam, nec lacinia metus. Proin id neque pharetra sapien tincidunt consectetur. In nunc leo, aliquet sed erat et, accumsan finibus enim. Praesent iaculis feugiat lacus a volutpat. Donec et nunc quam. Morbi in turpis a orci feugiat malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae elit neque. Sed in quam at nunc scelerisque cursus. Pellentesque maximus laoreet magna vel convallis. Nullam nec mattis odio. Sed sagittis nisi a nunc ullamcorper cursus. ";

function SectionThree() {
  let sectionThree = useRef(null);
  const [showSectionThree, setshowSectionThree] = useState(true);
  const sectionThreeAnimation = useRef(null);

  useEffect(() => {
    sectionThreeAnimation.current = gsap.timeline().addLabel('start').fromTo(sectionThree.current, 1, {opacity: 0}, {opacity: 1}, 'start').from(sectionThree.current, 1, {
        y: 200,
        ease: Power3.easeOut,
      }, 'start');

    return () => {
      sectionThreeAnimation.current.kill();
    };
  }, []);

  useEffect(() => {
    if (showSectionThree) {
      sectionThreeAnimation.current.play();
    } else {
      sectionThreeAnimation.current.reverse();
    }
    console.log("showSectionThree", showSectionThree);
  }, [showSectionThree]);

  return (
    <InView
      threshold={1}
      onChange={(inView, entry) => {
        setshowSectionThree(!showSectionThree);
        // console.log("Inview SectionThree:", inView);
      }}
      triggerOnce={false}
    >
      <div className="section" ref={sectionThree}>
        <h1>Section Three</h1>

        <div className="section-body">{dummyText}</div>
      </div>
    </InView>
  );
}

export default SectionThree;
