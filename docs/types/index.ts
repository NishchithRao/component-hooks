export interface Props {
  name: string;
  description: string;
  defaultValue: string | number | boolean | null;
  required: boolean;
  type: {
    name: string;
    value: string;
  };
}

export interface JSONProps {
  returns: string[];
  description: string[];
  defaultValue: string[];
  propList: Partial<Props>[];
  basicExample: string[] | undefined;
}

export interface ComponentProps {
  json: JSONProps;
  name?: string;
  links: NavigationLinks[];
}

export interface NavigationLinks {
  title: string;
  href: string;
}
