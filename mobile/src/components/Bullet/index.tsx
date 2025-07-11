import { Container } from './styles';

interface BulletProps {
  active?: boolean;
}

const Bullet = ({ active = false }: BulletProps) => {
  return <Container active={active} />;
};

export default Bullet;
