type QualificationItem = {
  title: string;
  subTitle: string;
};

export type Qualifications = {
  title: string;
  items: QualificationItem[];
};

export type AboutSectionProps = {
  title: string;
  description: string;
  qualifications: Qualifications[];
};
