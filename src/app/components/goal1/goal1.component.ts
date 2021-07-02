import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/Content';

@Component({
  selector: 'app-goal1',
  templateUrl: './goal1.component.html',
  styleUrls: ['./goal1.component.css'],
})
export class Goal1Component implements OnInit {
  //initial value evaluated from window's initial width
  isWindowSmall: boolean = window.innerWidth < 768;

  //specifying which "accordion-tab" component is "active"
  activeIndex: number = 0;

  // content list can be extracted from DB through a service
  contents: Content[] = [
    {
      heading: 'What is Lorem Ipsum?',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially unchanged. It
  was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      heading: 'Why do we use it?',
      text: `It is a long established fact that a reader will be distracted by the
  readable content of a page when looking at its layout. The point of using
  Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  opposed to using 'Content here, content here', making it look like readable
  English. Many desktop publishing packages and web page editors now use Lorem
  Ipsum as their default model text, and a search for 'lorem ipsum' will
  uncover many web sites still in their infancy. Various versions have evolved
  over the years, sometimes by accident, sometimes on purpose (injected humour
  and the like).`,
    },
    {
      heading: 'Where does it come from?',
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has
    roots in a piece of classical Latin literature from 45 BC, making it over
    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words,
    consectetur, from a Lorem Ipsum passage, and going through the cites of the
    word in classical literature, discovered the undoubtable source. Lorem Ipsum
    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
    treatise on the theory of ethics, very popular during the Renaissance. The
    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
    in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
    for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
    et Malorum" by Cicero are also reproduced in their exact original form,
    accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
    {
      heading: '44444444444444444444',
      text: `44444444Contrary to popular belief, Lorem Ipsum is not simply random text. It has
    roots in a piece of classical Latin literature from 45 BC, making it over
    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words,
    consectetur, from a Lorem Ipsum passage, and going through the cites of the
    word in classical literature, discovered the undoubtable source. Lorem Ipsum
    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
    treatise on the theory of ethics, very popular during the Renaissance. The
    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
    in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
    for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
    et Malorum" by Cicero are also reproduced in their exact original form,
    accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
    {
      heading: '555555Where does it come from?',
      text: `55555555555Contrary to popular belief, Lorem Ipsum is not simply random text. It has
    roots in a piece of classical Latin literature from 45 BC, making it over
    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words,
    consectetur, from a Lorem Ipsum passage, and going through the cites of the
    word in classical literature, discovered the undoubtable source. Lorem Ipsum
    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
    treatise on the theory of ethics, very popular during the Renaissance. The
    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
    in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
    for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
    et Malorum" by Cicero are also reproduced in their exact original form,
    accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    //global event window.onresize()
    window.onresize = () => {
      this.isWindowSmall = window.innerWidth < 768;
    };
  }

  //function used to receive child
  onIndexChange(newIndex: number) {
    this.activeIndex = newIndex;
  }
}
