import { render } from '@testing-library/react'
import { CommonSEO, PageSEO, BlogSEO, TagSEO } from '@/components/SEO'
import * as nextRouter from 'next/router'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

it('renders CommonSEO unchanged', () => {
  const { container } = render(
    <CommonSEO
      title="test"
      description="test"
      ogType="test"
      ogImage="test"
      twImage="test"
      canonicalUrl="test"
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders CommonSEO with ogImage Array unchanged', () => {
  const { container } = render(
    <CommonSEO
      title="test"
      description="test"
      ogType="test"
      ogImage={['', '']}
      twImage="test"
      canonicalUrl="test"
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders PageSEO unchanged', () => {
  const { container } = render(<PageSEO title="test" description="test" />)
  expect(container).toMatchSnapshot()
})

it('renders TagSEO unchanged', () => {
  const { container } = render(<TagSEO title="test" description="test" />)
  expect(container).toMatchSnapshot()
})

it('renders BlogSEO unchanged', () => {
  const { container } = render(
    <BlogSEO
      authorDetails={[
        {
          readingTime: { text: '1 min read', minutes: 0.18, time: 10800, words: 36 },
          slug: ['default'],
          fileName: 'tony.md',
          name: 'JKK',
          avatar: '/static/images/avatar.jpg',
          occupation: 'Data Engineer',
          company: 'Deloitte',
          email: 'jishnukrishnan96@gmail.com',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/jishnu-krishnan-k-803ba4ab/',
          github: 'https://github.com/JKK-Jishnu',
          date: null,
        },
      ]}
      title="test"
      summary="test"
      date="2021-02-19"
      lastmod="2021-02-19"
      url="test"
      images={['test']}
      canonicalUrl="test"
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders BlogSEO without authorDetails and empty images array unchanged', () => {
  const { container } = render(
    <BlogSEO
      title="test"
      summary="test"
      date="2021-02-19"
      lastmod="2021-02-19"
      url="test"
      images={[]}
      canonicalUrl="test"
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders BlogSEO without authorDetails and empty images array unchanged', () => {
  const { container } = render(
    <BlogSEO
      title="test"
      summary="test"
      date="2021-02-19"
      lastmod="2021-02-19"
      url="test"
      images="test"
      canonicalUrl="test"
    />
  )
  expect(container).toMatchSnapshot()
})
